import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const CrisisSupport = () => {
  const [expandedOption, setExpandedOption] = useState<string | null>(null);
  const [selectedSubOption, setSelectedSubOption] = useState<string | null>(null);

  const handleToggle = (option: string) => {
    if (expandedOption === option) {
      setExpandedOption(null);
      setSelectedSubOption(null);
    } else {
      setExpandedOption(option);
      setSelectedSubOption(null);
    }
  };

  const handleSelectSubOption = (subOption: string) => {
    setSelectedSubOption(subOption);
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 space-y-6">
      <div className="container max-w-md mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Crisis Support</h1>
        <p className="text-muted-foreground text-sm">What do you require support with?</p>

        <div className="space-y-4">
          {/* Stress Option */}
          <Card 
            className="p-4 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleToggle('stress')}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Stress</span>
              {expandedOption === 'stress' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>

            {expandedOption === 'stress' && (
              <CardContent className="pt-4 space-y-2">
                <p className="text-xs text-muted-foreground uppercase">Related to:</p>
                {['Work', 'University', 'Finances', 'Relationships'].map(sub => (
                  <Button 
                    key={sub} 
                    variant={selectedSubOption === sub ? "default" : "outline"} 
                    className="w-full justify-start"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent collapsing parent card
                      handleSelectSubOption(sub);
                    }}
                  >
                    {sub}
                  </Button>
                ))}
              </CardContent>
            )}
          </Card>

          {/* Anxiety Option */}
          <Card 
            className="p-4 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleToggle('anxiety')}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Anxiety</span>
              {expandedOption === 'anxiety' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </Card>

          {/* Depression Option */}
          <Card 
            className="p-4 cursor-pointer hover:bg-accent transition-colors"
            onClick={() => handleToggle('depression')}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">Depression</span>
              {expandedOption === 'depression' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </Card>
        </div>

        {/* Support Resources */}
        {expandedOption === 'stress' && selectedSubOption && (
          <Card className="p-4 mt-6 bg-primary/10 border-none">
            <p className="text-sm font-medium mb-2">Helpful Resources for {selectedSubOption} Stress:</p>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Support Link 1</span>
                <ExternalLink size={16} className="text-primary" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Support Link 2</span>
                <ExternalLink size={16} className="text-primary" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Support Link 3</span>
                <ExternalLink size={16} className="text-primary" />
              </div>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
};

export default CrisisSupport;