import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, Globe, Users } from "lucide-react";

export function Tickets() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!subject.trim() || !message.trim()) {
      alert("Please fill in both subject and message fields");
      return;
    }

    setIsSubmitting(true);
    
    // Mock submission - in real app, this would call an API
    setTimeout(() => {
      alert("Ticket submitted successfully! Our team will reach out to you within 24 hours.");
      setSubject("");
      setMessage("");
      setScreenshot(null);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">New Ticket</h1>
        <p className="text-muted-foreground">Create a support ticket and our team will assist you</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submit a Support Ticket</CardTitle>
          <CardDescription>Fill out the form below to contact our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Enter Ticket Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Describe your issue..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="screenshot">Upload Screenshot</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="screenshot"
                  type="file"
                  accept="image/*"
                  onChange={handleScreenshotChange}
                  className="cursor-pointer"
                />
                <span className="text-sm text-muted-foreground">
                  {screenshot ? screenshot.name : "No file chosen"}
                </span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Submit Ticket
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Information */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Contact Our Team</h3>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="h-5 w-5 text-muted-foreground" />
              <p className="text-lg text-muted-foreground">
                We've served over 500,000 people across our global network.
              </p>
            </div>
            <p className="text-base text-muted-foreground">
              In 24 Hour's Hell Market Team will reach You. Thank you.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
