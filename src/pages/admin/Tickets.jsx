import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageSquare, CheckCircle, Clock, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock tickets data
const mockTickets = [
  { id: 1, user: "user1@example.com", subject: "Payment Issue", message: "I can't process my deposit", status: "Open", priority: "High", date: "2024-02-15" },
  { id: 2, user: "user2@example.com", subject: "Card Not Working", message: "The card I purchased is not working", status: "In Progress", priority: "Medium", date: "2024-02-14" },
  { id: 3, user: "user3@example.com", subject: "Account Problem", message: "I can't access my account", status: "Closed", priority: "Low", date: "2024-02-13" },
  { id: 4, user: "user4@example.com", subject: "Refund Request", message: "I want a refund for my purchase", status: "Open", priority: "High", date: "2024-02-12" },
];

export function Tickets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tickets, setTickets] = useState(mockTickets);
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(tickets.map(ticket =>
      ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
    ));
  };

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-500/10 text-red-500";
      case "Medium":
        return "bg-yellow-500/10 text-yellow-500";
      case "Low":
        return "bg-blue-500/10 text-blue-500";
      default:
        return "bg-gray-500/10 text-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tickets</h1>
          <p className="text-muted-foreground">Manage support tickets</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="flex items-center gap-2">
        {["All", "Open", "In Progress", "Closed"].map((status) => (
          <Button
            key={status}
            variant={statusFilter === status ? "default" : "outline"}
            size="sm"
            onClick={() => setStatusFilter(status)}
          >
            {status}
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tickets</CardTitle>
          <CardDescription>Total tickets: {filteredTickets.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">ID</th>
                  <th className="text-left p-4 text-sm font-semibold">User</th>
                  <th className="text-left p-4 text-sm font-semibold">Subject</th>
                  <th className="text-left p-4 text-sm font-semibold">Message</th>
                  <th className="text-left p-4 text-sm font-semibold">Priority</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                  <th className="text-left p-4 text-sm font-semibold">Date</th>
                  <th className="text-left p-4 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-border hover:bg-accent/50">
                    <td className="p-4 text-sm">#{ticket.id}</td>
                    <td className="p-4 text-sm">{ticket.user}</td>
                    <td className="p-4 font-medium">{ticket.subject}</td>
                    <td className="p-4 text-sm text-muted-foreground max-w-xs truncate">{ticket.message}</td>
                    <td className="p-4">
                      <span className={cn("px-2 py-1 text-xs rounded-full", getPriorityColor(ticket.priority))}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={cn(
                          "px-2 py-1 text-xs rounded-full",
                          ticket.status === "Open"
                            ? "bg-blue-500/10 text-blue-500"
                            : ticket.status === "In Progress"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-green-500/10 text-green-500"
                        )}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{ticket.date}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {ticket.status !== "Closed" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(ticket.id, "Closed")}
                            className="text-green-500 hover:text-green-600"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Close
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

