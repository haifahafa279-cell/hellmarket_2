import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Wallet, QrCode, Upload, CheckCircle, Clock, XCircle, History } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock wallet addresses
const mockWallets = {
  LiteCoin: {
    address: "LTC1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN",
    network: "Litecoin Mainnet",
  },
  USDT: {
    address: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
    network: "Ethereum (ERC20)",
  },
  Bitcoin: {
    address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN",
    network: "Bitcoin Mainnet",
  },
};

// Mock deposit history
const mockDepositHistory = [
  {
    id: 1,
    amount: 500.00,
    crypto: "USDT",
    status: "completed",
    date: "2024-01-15",
    time: "14:30",
    txHash: "0x1234...5678",
  },
  {
    id: 2,
    amount: 250.00,
    crypto: "Bitcoin",
    status: "pending",
    date: "2024-01-14",
    time: "10:15",
    txHash: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN",
  },
  {
    id: 3,
    amount: 100.00,
    crypto: "LiteCoin",
    status: "completed",
    date: "2024-01-13",
    time: "16:45",
    txHash: "LTC1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfN",
  },
  {
    id: 4,
    amount: 750.00,
    crypto: "USDT",
    status: "failed",
    date: "2024-01-12",
    time: "09:20",
    txHash: "0x9876...5432",
  },
];

export function Deposit() {
  const [activeTab, setActiveTab] = useState("deposit");
  const [selectedCrypto, setSelectedCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [step, setStep] = useState("form"); // 'form', 'payment', 'upload'
  const [screenshot, setScreenshot] = useState(null);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setError("");

    if (value) {
      const numValue = parseFloat(value);
      if (numValue < 50) {
        setError("Minimum deposit is $50");
      } else if (numValue > 1000) {
        setError("Maximum deposit is $1000");
      }
    }
  };

  const handleConfirmDeposit = () => {
    if (!selectedCrypto) {
      setError("Please select a cryptocurrency");
      return;
    }

    if (!amount || parseFloat(amount) < 50 || parseFloat(amount) > 1000) {
      setError("Please enter a valid amount between $50 and $1000");
      return;
    }

    setError("");
    setStep("payment");
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
    }
  };

  const handleSubmit = () => {
    if (!screenshot) {
      setError("Please upload a screenshot of your payment");
      return;
    }

    // Mock submission - in real app, this would call an API
    alert("Deposit submitted successfully! Your payment is being processed.");
    setStep("form");
    setSelectedCrypto("");
    setAmount("");
    setScreenshot(null);
    setError("");
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 text-green-500";
      case "pending":
        return "bg-yellow-500/10 text-yellow-500";
      case "failed":
        return "bg-red-500/10 text-red-500";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Deposit</h1>
        <p className="text-muted-foreground">Add funds to your account using cryptocurrency</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        <button
          onClick={() => {
            setActiveTab("deposit");
            setStep("form");
            setSelectedCrypto("");
            setAmount("");
            setScreenshot(null);
            setError("");
          }}
          className={cn(
            "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
            activeTab === "deposit"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <Wallet className="inline h-4 w-4 mr-2" />
          Deposit Money
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={cn(
            "px-4 py-2 text-sm font-medium border-b-2 transition-colors",
            activeTab === "history"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          <History className="inline h-4 w-4 mr-2" />
          Deposit History
        </button>
      </div>

      {/* Deposit Money Tab */}
      {activeTab === "deposit" && (
        <>
          {step === "form" && (
            <Card>
              <CardHeader>
                <CardTitle>Select Cryptocurrency</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={selectedCrypto} onValueChange={setSelectedCrypto}>
                  <div className="grid gap-4 md:grid-cols-3">
                    <label
                      className={cn(
                        "flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors",
                        selectedCrypto === "LiteCoin"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <RadioGroupItem value="LiteCoin" id="litecoin" />
                      <div className="flex-1">
                        <Label htmlFor="litecoin" className="cursor-pointer font-semibold">
                          LiteCoin
                        </Label>
                        <p className="text-xs text-muted-foreground">LTC</p>
                      </div>
                    </label>

                    <label
                      className={cn(
                        "flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors",
                        selectedCrypto === "USDT"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <RadioGroupItem value="USDT" id="usdt" />
                      <div className="flex-1">
                        <Label htmlFor="usdt" className="cursor-pointer font-semibold">
                          USDT
                        </Label>
                        <p className="text-xs text-muted-foreground">Tether</p>
                      </div>
                    </label>

                    <label
                      className={cn(
                        "flex items-center space-x-3 rounded-lg border p-4 cursor-pointer transition-colors",
                        selectedCrypto === "Bitcoin"
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      <RadioGroupItem value="Bitcoin" id="bitcoin" />
                      <div className="flex-1">
                        <Label htmlFor="bitcoin" className="cursor-pointer font-semibold">
                          Bitcoin
                        </Label>
                        <p className="text-xs text-muted-foreground">BTC</p>
                      </div>
                    </label>
                  </div>
                </RadioGroup>

                <div className="space-y-2">
                  <Label htmlFor="amount">Deposit Amount</Label>
                  <div className="space-y-2">
                    <Input
                      id="amount"
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={handleAmountChange}
                      min="50"
                      max="1000"
                      step="0.01"
                    />
                    <p className="text-xs text-muted-foreground">
                      Minimum: $50 • Maximum: $1000
                    </p>
                  </div>
                </div>

                {error && (
                  <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                    {error}
                  </div>
                )}

                <Button
                  onClick={handleConfirmDeposit}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={!selectedCrypto || !amount || !!error}
                >
                  Confirm Deposit
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Complete Payment</CardTitle>
                <CardDescription>
                  Send {amount} USD worth of {selectedCrypto} to the address below
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Wallet Address</Label>
                    <div className="flex items-center gap-2">
                      <Input
                        value={mockWallets[selectedCrypto].address}
                        readOnly
                        className="font-mono text-sm"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(mockWallets[selectedCrypto].address);
                          alert("Address copied to clipboard!");
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Network</Label>
                    <p className="text-sm text-muted-foreground">
                      {mockWallets[selectedCrypto].network}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Amount</Label>
                    <p className="text-lg font-semibold">${parseFloat(amount).toFixed(2)}</p>
                  </div>

                  {/* QR Code Placeholder */}
                  <div className="flex justify-center p-6 bg-muted rounded-lg">
                    <div className="space-y-4 text-center">
                      <QrCode className="h-32 w-32 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Scan QR code to pay with {selectedCrypto}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <Label htmlFor="screenshot">Upload Payment Screenshot</Label>
                    <div className="flex items-center gap-4">
                      <Input
                        id="screenshot"
                        type="file"
                        accept="image/*"
                        onChange={handleScreenshotChange}
                        className="cursor-pointer"
                      />
                      {screenshot && (
                        <span className="text-sm text-muted-foreground">
                          {screenshot.name}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Please upload a screenshot of your transaction confirmation
                    </p>
                  </div>

                  {error && (
                    <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                      {error}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => {
                        setStep("form");
                        setScreenshot(null);
                        setError("");
                      }}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={!screenshot}
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Submit Deposit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}

      {/* Deposit History Tab */}
      {activeTab === "history" && (
        <Card>
          <CardHeader>
            <CardTitle>Deposit History</CardTitle>
            <CardDescription>View all your deposit transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDepositHistory.map((deposit) => (
                <div
                  key={deposit.id}
                  className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-4 flex-1">
                    {getStatusIcon(deposit.status)}
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">
                          {deposit.amount.toFixed(2)} USD ({deposit.crypto})
                        </p>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(
                            deposit.status
                          )}`}
                        >
                          {deposit.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {deposit.date} at {deposit.time}
                      </p>
                      <p className="text-xs text-muted-foreground font-mono">
                        TX: {deposit.txHash}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-green-500">
                      +${deposit.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

