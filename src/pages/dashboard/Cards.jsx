import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreditCard, Star, ShoppingCart, X } from "lucide-react";
import americanExpressGold from "@/assets/american_express_gold.png";
import americanExpressGreen from "@/assets/american_express_green.png";
import americanSilver from "@/assets/american_silver.png";
import discover from "@/assets/discover.png";
import discover2 from "@/assets/discover_2.png";
import dinnerClub from "@/assets/dinner_club.png";
import visaClassic from "@/assets/visa_classic.png";
import visaGold from "@/assets/visa_gold.png";
import visaInfinite from "@/assets/visa_infinite.png";
import visaPlatinum from "@/assets/visa_platinum.png";
import visaSignature from "@/assets/visa_signature.png";
import masterPlatinum from "@/assets/master_platinum.png";
import masterStandard from "@/assets/master_standard.png";
import masterWorldCard from "@/assets/master_world_card.png";
import masterWorldElite from "@/assets/master_world_elite.png";

// Mock data for cards
const mockCards = [
  {
    id: 1,
    name: "American Express",
    image: americanExpressGold,
    rating: 4.8,
    buyers: 157800,
    available: "100k+",
    price: 250.0,
    for: "GOLD CARD",
    balance: "$2.5k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 2,
    name: "American Express",
    image: americanExpressGreen,
    rating: 4.8,
    buyers: 119900,
    available: "100k+",
    price: 150.0,
    for: "GREEN CARD",
    balance: "$1.5k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 3,
    name: "American Express",
    image: americanSilver,
    rating: 4.9,
    buyers: 85200,
    available: "100k+",
    price: 100.0,
    for: "PLATINUM CARD",
    balance: "$1.0k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 4,
    name: "Visa Platinum",
    image: visaPlatinum,
    rating: 4.6,
    buyers: 112900,
    available: "100k+",
    price: 50.0,
    for: "For TIKTOK",
    balance: "$500+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 5,
    name: "Visa Platinum",
    image: visaPlatinum,
    rating: 4.8,
    buyers: 174600,
    available: "100k+",
    price: 50.0,
    for: "For PUBG",
    balance: "$500+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 6,
    name: "Visa Platinum",
    image: visaPlatinum,
    rating: 4.8,
    buyers: 110900,
    available: "100k+",
    price: 50.0,
    for: "For PLAYSTORE REDEEM",
    balance: "$500+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 7,
    name: "Visa Classic",
    image: visaClassic,
    rating: 4.8,
    buyers: 194400,
    available: "100k+",
    price: 30.0,
    for: "30$",
    balance: "$30+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 8,
    name: "Visa Platinum",
    image: visaPlatinum,
    rating: 4.7,
    buyers: 112300,
    available: "100k+",
    price: 50.0,
    for: "50$",
    balance: "$50+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 9,
    name: "Visa Gold",
    image: visaGold,
    rating: 4.6,
    buyers: 87000,
    available: "100k+",
    price: 100.0,
    for: "100$",
    balance: "$100+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 10,
    name: "Visa Signature",
    image: visaSignature,
    rating: 4.9,
    buyers: 155100,
    available: "100k+",
    price: 30.0,
    for: "30$",
    balance: "$30+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 11,
    name: "Visa Infinite",
    image: visaInfinite,
    rating: 4.5,
    buyers: 106200,
    available: "100k+",
    price: 80.0,
    for: "80$",
    balance: "$80+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 12,
    name: "Discover",
    image: discover,
    rating: 4.6,
    buyers: 178500,
    available: "100k+",
    price: 50.0,
    for: "MILES CARD",
    balance: "$500+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 13,
    name: "Discover",
    image: discover2,
    rating: 4.6,
    buyers: 169600,
    available: "100k+",
    price: 100.0,
    for: "PRIDE CARD",
    balance: "$1.0k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 14,
    name: "Dinners Club",
    image: dinnerClub,
    rating: 4.7,
    buyers: 106600,
    available: "100k+",
    price: 150.0,
    for: "INTERNATIONAL CARD",
    balance: "$1.5k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 15,
    name: "MasterCard",
    image: masterPlatinum,
    rating: 4.7,
    buyers: 135600,
    available: "25k+",
    price: 50.0,
    for: "PLATINUM CARD",
    balance: "$500+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 16,
    name: "MasterCard",
    image: masterStandard,
    rating: 4.7,
    buyers: 184600,
    available: "200k+",
    price: 100.0,
    for: "STANDARD CARD",
    balance: "$1.0k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 17,
    name: "MasterCard",
    image: masterWorldCard,
    rating: 4.7,
    buyers: 134800,
    available: "25k+",
    price: 150.0,
    for: "WORLD CARD",
    balance: "$1.5k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
  {
    id: 18,
    name: "MasterCard",
    image: masterWorldElite,
    rating: 4.8,
    buyers: 127700,
    available: "25k+",
    price: 200.0,
    for: "WORLD ELITE CARD",
    balance: "$2.0k+ USD",
    type: "Credit Card",
    holderName: "Available",
    countryCityZip: "Available",
    address: "Available",
    phoneEmail: "Available",
    dob: "Available",
    ssn: "Available",
    refund: "Available",
  },
];

export function Cards() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBuyClick = (card) => {
    setSelectedCard(card);
    setQuantity(1);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCard(null);
    setQuantity(1);
  };

  const handlePurchase = () => {
    if (!quantity || quantity < 1) {
      alert("Please enter a valid quantity");
      return;
    }
    // Mock purchase - in real app, this would call an API
    alert(
      `Purchase successful! ${quantity} x ${selectedCard.name} for $${(
        selectedCard.price * quantity
      ).toFixed(2)}`
    );
    handleCloseDialog();
  };

  const formatBuyers = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const remainder = rating % 1;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">
            ★
          </span>
        );
      } else if (i === fullStars && remainder >= 0.5) {
        stars.push(
          <span key={i} className="text-yellow-400 text-sm">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-muted-foreground/30 text-sm">
            ★
          </span>
        );
      }
    }
    return <div className="flex items-center gap-0.5">{stars}</div>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Credit Cards</h1>
        <p className="text-muted-foreground">
          Browse and purchase premium credit cards
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {mockCards.map((card) => (
          <Card
            key={card.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                  🔥
                </span>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{card.name}</CardTitle>
              <CardDescription className="text-sm font-medium text-foreground mt-1">
                {card.for}
              </CardDescription>
              <div className="flex items-center gap-2 mt-2">
                {renderRatingStars(card.rating)}
                <span className="text-sm text-muted-foreground">
                  ({card.rating})
                </span>
              </div>
              <CardDescription className="text-xs mt-1">
                {formatBuyers(card.buyers)} people bought this
              </CardDescription>
              <CardDescription className="text-xs">
                Available: {card.available}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  ${card.price.toFixed(2)}
                </span>
                <Button
                  onClick={() => handleBuyClick(card)}
                  className="bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Buy Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Card Details</DialogTitle>
            <DialogDescription>
              Review the card information before purchasing
            </DialogDescription>
          </DialogHeader>

          {selectedCard && (
            <div className="space-y-6">
              {/* Card Image */}
              <div className="flex justify-center">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="h-64 object-contain rounded-lg"
                />
              </div>

              {/* Card Information */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">💬</span>
                    <div>
                      <p className="text-sm font-medium">For:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.for}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">💰</span>
                    <div>
                      <p className="text-sm font-medium">Price:</p>
                      <p className="text-sm text-muted-foreground">
                        ${selectedCard.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">💼</span>
                    <div>
                      <p className="text-sm font-medium">Balance:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.balance}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">💳</span>
                    <div>
                      <p className="text-sm font-medium">Type:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.type}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">👤</span>
                    <div>
                      <p className="text-sm font-medium">Holder Name:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.holderName}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">🌍</span>
                    <div>
                      <p className="text-sm font-medium">Country/City/Zip:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.countryCityZip}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🏠</span>
                    <div>
                      <p className="text-sm font-medium">Address:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">📞</span>
                    <div>
                      <p className="text-sm font-medium">Phone/Email:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.phoneEmail}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">🎂</span>
                    <div>
                      <p className="text-sm font-medium">DOB:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.dob}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">🛡️</span>
                    <div>
                      <p className="text-sm font-medium">SSN:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.ssn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-lg">🔁</span>
                    <div>
                      <p className="text-sm font-medium">Refund:</p>
                      <p className="text-sm text-muted-foreground">
                        {selectedCard.refund}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quantity Input */}
              <div className="border-t border-border pt-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Total: ${(selectedCard.price * quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handleCloseDialog}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handlePurchase}
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Purchase
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
