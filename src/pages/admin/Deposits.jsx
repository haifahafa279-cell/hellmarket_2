import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, CheckCircle, Clock, XCircle, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock deposits data
const mockDeposits = [
  { id: 1, user: "user1@example.com", amount: "$500", crypto: "Bitcoin", status: "Completed", date: "2024-02-15", txHash: "0x1234...5678" },
  { id: 2, user: "user2@example.com", amount: "$250", crypto: "USDT", status: "Pending", date: "2024-02-15", txHash: "0x9876...5432" },
  { id: 3, user: "user3@example.com", amount: "$1,000", crypto: "LiteCoin", status: "Completed", date: "2024-02-14", txHash: "0xabcd...efgh" },
  { id: 4, user: "user4@example.com", amount: "$750", crypto: "Bitcoin", status: "Failed", date: "2024-02-14", txHash: "0x5678...9012" },
  { id: 5, user: "user5@example.com", amount: "$300", crypto: "USDT", status: "Completed", date: "2024-02-13", txHash: "0x3456...7890" },
];

export function Deposits() {
  const [searchTerm, setSearchTerm] = useState("");
  const [deposits, setDeposits] = useState(mockDeposits);
  const [statusFilter, setStatusFilter] = useState("All");

  const handleStatusChange = (depositId, newStatus) => {
    setDeposits(deposits.map(deposit =>
      deposit.id === depositId ? { ...deposit, status: newStatus } : deposit
    ));
  };

  const filteredDeposits = deposits.filter(deposit => {
    const matchesSearch = deposit.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      deposit.txHash.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || deposit.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Deposits</h1>
          <p className="text-muted-foreground">Manage all deposit transactions</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search deposits..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Status Filters */}
      <div className="flex items-center gap-2">
        {["All", "Completed", "Pending", "Failed"].map((status) => (
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
          <CardTitle>All Deposits</CardTitle>
          <CardDescription>Total deposits: {filteredDeposits.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">ID</th>
                  <th className="text-left p-4 text-sm font-semibold">User</th>
                  <th className="text-left p-4 text-sm font-semibold">Amount</th>
                  <th className="text-left p-4 text-sm font-semibold">Crypto</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                  <th className="text-left p-4 text-sm font-semibold">Date</th>
                  <th className="text-left p-4 text-sm font-semibold">Transaction Hash</th>
                  <th className="text-left p-4 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDeposits.map((deposit) => (
                  <tr key={deposit.id} className="border-b border-border hover:bg-accent/50">
                    <td className="p-4 text-sm">#{deposit.id}</td>
                    <td className="p-4 text-sm">{deposit.user}</td>
                    <td className="p-4 font-semibold">{deposit.amount}</td>
                    <td className="p-4 text-sm">{deposit.crypto}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(deposit.status)}
                        <span
                          className={cn(
                            "px-2 py-1 text-xs rounded-full",
                            deposit.status === "Completed"
                              ? "bg-green-500/10 text-green-500"
                              : deposit.status === "Pending"
                              ? "bg-yellow-500/10 text-yellow-500"
                              : "bg-red-500/10 text-red-500"
                          )}
                        >
                          {deposit.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{deposit.date}</td>
                    <td className="p-4 text-sm font-mono text-muted-foreground">{deposit.txHash}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        {deposit.status === "Pending" && (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(deposit.id, "Completed")}
                            className="text-green-500 hover:text-green-600"
                          >
                            Approve
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

