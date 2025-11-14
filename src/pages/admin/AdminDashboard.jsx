import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Wallet, CreditCard, Receipt, Ticket, DollarSign } from "lucide-react";

// Mock statistics data
const stats = [
  {
    title: "Total Users",
    value: "12,458",
    change: "+12.5%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Total Deposits",
    value: "$245,890",
    change: "+8.2%",
    icon: Wallet,
    color: "text-green-500",
  },
  {
    title: "Total Cards",
    value: "3,456",
    change: "+15.3%",
    icon: CreditCard,
    color: "text-purple-500",
  },
  {
    title: "Total Transactions",
    value: "8,932",
    change: "+5.7%",
    icon: Receipt,
    color: "text-orange-500",
  },
  {
    title: "Open Tickets",
    value: "127",
    change: "-3.2%",
    icon: Ticket,
    color: "text-red-500",
  },
  {
    title: "Revenue",
    value: "$125,450",
    change: "+18.9%",
    icon: DollarSign,
    color: "text-primary",
  },
];

// Mock recent activity
const recentActivity = [
  { id: 1, type: "Deposit", user: "user@example.com", amount: "$500", status: "Completed", time: "2 minutes ago" },
  { id: 2, type: "Card Purchase", user: "john@example.com", amount: "$250", status: "Pending", time: "5 minutes ago" },
  { id: 3, type: "Deposit", user: "jane@example.com", amount: "$1,000", status: "Completed", time: "10 minutes ago" },
  { id: 4, type: "Ticket", user: "bob@example.com", subject: "Payment Issue", status: "Open", time: "15 minutes ago" },
  { id: 5, type: "Transaction", user: "alice@example.com", amount: "$150", status: "Completed", time: "20 minutes ago" },
];

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">Overview of your platform statistics</p>
      </div>

      {/* Statistics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>{" "}
                  from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest platform activities and transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm">{activity.type}</span>
                    <span className="text-xs text-muted-foreground">{activity.user}</span>
                  </div>
                  {activity.amount && (
                    <span className="text-sm font-medium">{activity.amount}</span>
                  )}
                  {activity.subject && (
                    <span className="text-sm text-muted-foreground">{activity.subject}</span>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      activity.status === "Completed"
                        ? "bg-green-500/10 text-green-500"
                        : activity.status === "Pending"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-blue-500/10 text-blue-500"
                    }`}
                  >
                    {activity.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

