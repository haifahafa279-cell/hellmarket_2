import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  ShoppingCart,
  Copy,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import americanExpressGold from "@/assets/american_express_gold.png";
import americanExpressGreen from "@/assets/american_express_green.png";
import visaPlatinum from "@/assets/visa_platinum.png";
import visaSignature from "@/assets/visa_signature.png";

// Mock purchased cards data
const mockPurchasedCards = [
  // {
  //   id: 1,
  //   name: "American Express GOLD CARD",
  //   image: americanExpressGold,
  //   purchaseDate: "2024-01-15",
  //   purchasePrice: 250.00,
  //   quantity: 1,
  //   status: "active",
  //   cardNumber: "3782-8224-6310-005",
  //   cvv: "1234",
  //   expiryDate: "12/2026",
  //   holderName: "John Doe",
  //   balance: "$2,500.00",
  //   bin: "378282",
  // },
  // {
  //   id: 2,
  //   name: "American Express GREEN CARD",
  //   image: americanExpressGreen,
  //   purchaseDate: "2024-01-14",
  //   purchasePrice: 150.00,
  //   quantity: 2,
  //   status: "active",
  //   cardNumber: "3789-3456-7890-123",
  //   cvv: "5678",
  //   expiryDate: "08/2025",
  //   holderName: "Jane Smith",
  //   balance: "$1,800.00",
  //   bin: "378934",
  // },
  // {
  //   id: 3,
  //   name: "Visa Platinum",
  //   image: visaPlatinum,
  //   purchaseDate: "2024-01-13",
  //   purchasePrice: 300.00,
  //   quantity: 1,
  //   status: "used",
  //   cardNumber: "4532-1234-5678-9010",
  //   cvv: "901",
  //   expiryDate: "06/2027",
  //   holderName: "Robert Johnson",
  //   balance: "$0.00",
  //   bin: "453212",
  // },
  // {
  //   id: 4,
  //   name: "Visa Signature",
  //   image: visaSignature,
  //   purchaseDate: "2024-01-12",
  //   purchasePrice: 280.00,
  //   quantity: 1,
  //   status: "active",
  //   cardNumber: "4111-1111-1111-1111",
  //   cvv: "234",
  //   expiryDate: "03/2026",
  //   holderName: "Emily Davis",
  //   balance: "$3,200.00",
  //   bin: "411111",
  // },
];

export function MyCards() {
  const navigate = useNavigate();
  const [copiedField, setCopiedField] = useState(null);

  // For demo purposes, you can toggle this to show empty state
  const hasCards = mockPurchasedCards.length > 0;

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "used":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-500/10 text-green-500";
      case "used":
        return "bg-red-500/10 text-red-500";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      default:
        return "";
    }
  };

  if (!hasCards) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Cards</h1>
          <p className="text-muted-foreground">
            View and manage your purchased cards
          </p>
        </div>

        <Card className="border-2 border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 px-4">
            <CreditCard className="h-16 w-16 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">No Cards</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Card Not Purchased Yet!
            </p>

            <Card className="w-full max-w-md bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔥</span>
                  <h3 className="text-xl font-bold">
                    Premium Card Drop is Live!
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Unlock ultra-premium cards with high balance, verified BINs,
                  and top-tier value. Limited stock – act fast!
                </p>
                <Button
                  onClick={() => navigate("/dashboard/cards")}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  🚀 Grab Yours Now
                </Button>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Cards</h1>
        <p className="text-muted-foreground">
          View and manage your purchased cards
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPurchasedCards.map((card) => (
          <Card key={card.id} className="overflow-hidden">
            <div className="relative">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full font-semibold ${getStatusColor(
                    card.status
                  )}`}
                >
                  {getStatusIcon(card.status)}
                  <span className="capitalize">{card.status}</span>
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{card.name}</CardTitle>
              <CardDescription>
                Purchased on {new Date(card.purchaseDate).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Card Number
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono">{card.cardNumber}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() =>
                        handleCopy(card.cardNumber, `card-${card.id}`)
                      }
                    >
                      {copiedField === `card-${card.id}` ? (
                        <CheckCircle className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">CVV</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono">{card.cvv}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => handleCopy(card.cvv, `cvv-${card.id}`)}
                    >
                      {copiedField === `cvv-${card.id}` ? (
                        <CheckCircle className="h-3 w-3 text-green-500" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Expiry</span>
                  <span className="text-sm">{card.expiryDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Holder Name
                  </span>
                  <span className="text-sm">{card.holderName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Balance</span>
                  <span className="text-sm font-semibold text-green-500">
                    {card.balance}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">BIN</span>
                  <span className="text-sm font-mono">{card.bin}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Purchase Price
                  </span>
                  <span className="text-sm font-semibold">
                    ${card.purchasePrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Quantity
                  </span>
                  <span className="text-sm">{card.quantity}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
