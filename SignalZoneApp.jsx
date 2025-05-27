
// SignalZone Web App with React Router
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login({ setPhone }) {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (input.length >= 10) {
      setPhone(input);
      navigate("/plans");
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <h2 className="text-lg mb-2">Login with Phone Number</h2>
        <Input
          placeholder="Enter phone number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-2"
        />
        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </CardContent>
    </Card>
  );
}

function PlanSelector({ setSelectedPlan }) {
  const navigate = useNavigate();
  const plans = [
    { id: 1, label: "KES 10 - 30 mins", time: 30 },
    { id: 2, label: "KES 20 - 1 hour", time: 60 },
    { id: 3, label: "KES 50 - 3 hours", time: 180 },
  ];

  const handleSelect = (plan) => {
    setSelectedPlan(plan);
    navigate("/connected");
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <h2 className="text-lg mb-2">Select a Wi-Fi Plan</h2>
        <div className="space-y-2">
          {plans.map((plan) => (
            <Button
              key={plan.id}
              variant="outline"
              className="w-full"
              onClick={() => handleSelect(plan)}
            >
              {plan.label}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Connected({ selectedPlan }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">You're connected! 🎉</h2>
      <p>Enjoy your internet time.</p>
      <p className="text-sm mt-2">Plan: {selectedPlan?.label}</p>
    </div>
  );
}

export default function SignalZoneApp() {
  const [phone, setPhone] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">SignalZone</h1>
        <Routes>
          <Route path="/" element={<Login setPhone={setPhone} />} />
          <Route path="/plans" element={<PlanSelector setSelectedPlan={setSelectedPlan} />} />
          <Route path="/connected" element={<Connected selectedPlan={selectedPlan} />} />
        </Routes>
      </div>
    </Router>
  );
}
