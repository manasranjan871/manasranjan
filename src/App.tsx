import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ElectricalSystems from "./pages/skills/ElectricalSystems";
import IoTEmbedded from "./pages/skills/IoTEmbedded";
import SmartMetering from "./pages/skills/SmartMetering";
import ProblemSolving from "./pages/skills/ProblemSolving";
import TeamCollaboration from "./pages/skills/TeamCollaboration";
import ResearchInnovation from "./pages/skills/ResearchInnovation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/skills/electrical-systems" element={<ElectricalSystems />} />
          <Route path="/skills/iot-embedded" element={<IoTEmbedded />} />
          <Route path="/skills/smart-metering" element={<SmartMetering />} />
          <Route path="/skills/problem-solving" element={<ProblemSolving />} />
          <Route path="/skills/team-collaboration" element={<TeamCollaboration />} />
          <Route path="/skills/research-innovation" element={<ResearchInnovation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
