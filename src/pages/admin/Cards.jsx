import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Edit, Trash2 } from "lucide-react";

// Mock cards data
const mockCards = [
  { id: 1, name: "American Express GOLD CARD", price: "$250", balance: "$2.5k+", available: 1000, sold: 150, status: "Active" },
  { id: 2, name: "Visa Platinum Card", price: "$200", balance: "$1.5k+", available: 500, sold: 75, status: "Active" },
  { id: 3, name: "Mastercard Premium", price: "$300", balance: "$3k+", available: 200, sold: 120, status: "Active" },
  { id: 4, name: "Discover Card", price: "$180", balance: "$1k+", available: 0, sold: 200, status: "Out of Stock" },
];

export function Cards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cards, setCards] = useState(mockCards);

  const filteredCards = cards.filter(card =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cards</h1>
          <p className="text-muted-foreground">Manage gift cards inventory</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Add Card
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Cards</CardTitle>
          <CardDescription>Total cards: {filteredCards.length}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold">ID</th>
                  <th className="text-left p-4 text-sm font-semibold">Card Name</th>
                  <th className="text-left p-4 text-sm font-semibold">Price</th>
                  <th className="text-left p-4 text-sm font-semibold">Balance</th>
                  <th className="text-left p-4 text-sm font-semibold">Available</th>
                  <th className="text-left p-4 text-sm font-semibold">Sold</th>
                  <th className="text-left p-4 text-sm font-semibold">Status</th>
                  <th className="text-left p-4 text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCards.map((card) => (
                  <tr key={card.id} className="border-b border-border hover:bg-accent/50">
                    <td className="p-4 text-sm">#{card.id}</td>
                    <td className="p-4 font-medium">{card.name}</td>
                    <td className="p-4 font-semibold">{card.price}</td>
                    <td className="p-4 text-sm">{card.balance}</td>
                    <td className="p-4 text-sm">{card.available}</td>
                    <td className="p-4 text-sm">{card.sold}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          card.status === "Active"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {card.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Delete
                        </Button>
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

