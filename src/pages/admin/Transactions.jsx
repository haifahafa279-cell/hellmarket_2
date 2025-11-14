import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock transactions data
const mockTransactions = [
  { id: 1, user: "user1@example.com", type: "Deposit", amount: "$500", date: "2024-02-15", time: "10:30 AM", status: "Completed" },
  { id: 2, user: "user2@example.com", type: "Card Purchase", amount: "$250", date: "2024-02-15", time: "09:15 AM", status: "Completed" },
  { id: 3, user: "user3@example.com", type: "Deposit", amount: "$1,000", date: "2024-02-14", time: "05:45 PM", status: "Completed" },
  { id: 4, user: "user4@example.com", type: "Card Purchase", amount: "$180", date: "2024-02-14", time: "03:20 PM", status: "Pending" },
  { id: 5, user: "user5@example.com", type: "Deposit", amount: "$300", date: "2024-02-13", time: "11:10 AM", status: "Completed" },
];

export function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = mockTransactions.filter(transaction =>
    transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    transaction.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
          <p className="text-muted-foreground">View all platform transactions</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Total transactions: {filteredTransactions.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">ID</th>
                  <th className="text-left p-4 text-sm font-semibold">User</th>
                  <th className="text-left p-4 text-sm font-semibold">Type</th>
                  <th className="text-left p-4 text-sm font-semibold">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold">Date</th>
                  <th className="text-left p-4 text-sm font-semibold">Time</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-border hover:bg-accent/50">
                    <td className="p-4 text-sm">#{transaction.id}</td>
                    <td className="p-4 text-sm">{transaction.user}</td>
                    <td className="p-4 text-sm">{transaction.type}</td>
                    <td className="p-4 font-semibold">{transaction.amount}</td>
                    <td className="p-4 text-sm text-muted-foreground">{transaction.date}</td>
                    <td className="p-4 text-sm text-muted-foreground">{transaction.time}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          transaction.status === "Completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                        {transaction.status}
                      </span>
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

