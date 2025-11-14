import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Ban, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock users data
const mockUsers = [
  { id: 1, email: "user1@example.com", name: "John Doe", balance: "$1,250", status: "Active", joined: "2024-01-15", transactions: 45 },
  { id: 2, email: "user2@example.com", name: "Jane Smith", balance: "$850", status: "Active", joined: "2024-01-20", transactions: 32 },
  { id: 3, email: "user3@example.com", name: "Bob Johnson", balance: "$2,100", status: "Suspended", joined: "2024-01-10", transactions: 67 },
  { id: 4, email: "user4@example.com", name: "Alice Williams", balance: "$500", status: "Active", joined: "2024-02-01", transactions: 12 },
  { id: 5, email: "user5@example.com", name: "Charlie Brown", balance: "$3,400", status: "Active", joined: "2024-01-05", transactions: 89 },
];

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(mockUsers);

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">Manage all platform users</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
          <CardDescription>Total users: {filteredUsers.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">User</th>
                  <th className="text-left p-4 text-sm font-semibold">Email</th>
                  <th className="text-left p-4 text-sm font-semibold">Balance</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                  <th className="text-left p-4 text-sm font-semibold">Joined</th>
                  <th className="text-left p-4 text-sm font-semibold">Transactions</th>
                  <th className="text-left p-4 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border hover:bg-accent/50">
                    <td className="p-4">
                      <div className="font-medium">{user.name}</div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                    <td className="p-4 font-semibold">{user.balance}</td>
                    <td className="p-4">
                      <span
                        className={cn(
                          "px-2 py-1 text-xs rounded-full",
                          user.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        )}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{user.joined}</td>
                    <td className="p-4 text-sm">{user.transactions}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        {user.status === "Active" ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(user.id, "Suspended")}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Ban className="h-4 w-4 mr-1" />
                            Suspend
                          </Button>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleStatusChange(user.id, "Active")}
                            className="text-green-500 hover:text-green-600"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Activate
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

