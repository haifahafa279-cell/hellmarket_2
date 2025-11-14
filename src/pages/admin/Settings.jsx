import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";

export function Settings() {
  const [settings, setSettings] = useState({
    siteName: "Hell Market",
    siteEmail: "support@hellmarket.com",
    maintenanceMode: false,
    minDeposit: "50",
    maxDeposit: "1000",
    transactionFee: "2.5",
  });

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock save - in real app, this would call an API
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage platform settings and configuration</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure general platform settings</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="siteName">Site Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleChange("siteName", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="siteEmail">Site Email</Label>
              <Input
                id="siteEmail"
                type="email"
                value={settings.siteEmail}
                onChange={(e) => handleChange("siteEmail", e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="maintenanceMode"
                checked={settings.maintenanceMode}
                onChange={(e) => handleChange("maintenanceMode", e.target.checked)}
                className="rounded border-border"
              />
              <Label htmlFor="maintenanceMode">Maintenance Mode</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="minDeposit">Minimum Deposit ($)</Label>
                <Input
                  id="minDeposit"
                  type="number"
                  value={settings.minDeposit}
                  onChange={(e) => handleChange("minDeposit", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="maxDeposit">Maximum Deposit ($)</Label>
                <Input
                  id="maxDeposit"
                  type="number"
                  value={settings.maxDeposit}
                  onChange={(e) => handleChange("maxDeposit", e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="transactionFee">Transaction Fee (%)</Label>
              <Input
                id="transactionFee"
                type="number"
                step="0.1"
                value={settings.transactionFee}
                onChange={(e) => handleChange("transactionFee", e.target.value)}
              />
            </div>

            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <Save className="h-4 w-4 mr-2" />
              Save Settings
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

