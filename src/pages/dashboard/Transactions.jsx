import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";

// Mock transaction history data
const mockTransactions = [
  { id: 1, type: "Purchase", amount: -250.00, date: "2024-01-15", time: "14:30" },
  { id: 2, type: "Sale", amount: 500.00, date: "2024-01-14", time: "10:15" },
  { id: 3, type: "Purchase", amount: -100.00, date: "2024-01-13", time: "16:45" },
  { id: 4, type: "Sale", amount: 1000.00, date: "2024-01-12", time: "09:20" },
  { id: 5, type: "Purchase", amount: -75.00, date: "2024-01-11", time: "11:30" },
  { id: 6, type: "Sale", amount: 300.00, date: "2024-01-10", time: "13:15" },
  { id: 7, type: "Purchase", amount: -50.00, date: "2024-01-09", time: "15:00" },
  { id: 8, type: "Sale", amount: 200.00, date: "2024-01-08", time: "08:45" },
  { id: 9, type: "Deposit", amount: 750.00, date: "2024-01-07", time: "12:00" },
  { id: 10, type: "Purchase", amount: -150.00, date: "2024-01-06", time: "14:20" },
];

export function Transactions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">View your transaction history</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Receipt className="h-5 w-5 text-primary" />
            <CardTitle>Transaction History</CardTitle>
          </div>
          <CardDescription>All your transactions are listed below</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Time
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Type
                  </th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-border hover:bg-accent/50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm">{transaction.date}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">
                      {transaction.time}
                    </td>
                    <td className="py-3 px-4 text-sm">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          transaction.type === "Purchase"
                            ? "bg-red-500/10 text-red-500"
                            : transaction.type === "Sale"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-blue-500/10 text-blue-500"
                        }`}
                      >
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-semibold">
                      <span
                        className={
                          transaction.amount >= 0
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {transaction.amount >= 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {mockTransactions.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Receipt className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No transactions found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
