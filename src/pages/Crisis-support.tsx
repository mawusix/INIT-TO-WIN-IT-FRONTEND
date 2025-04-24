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
            <p className="text-sm font-medium mb-2">Helpful Resources for {selectedSubOption} related stress management:</p>
            <CardContent className="space-y-2">
              <a 
                href="https://www.acas.org.uk/managing-work-related-stress" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between text-sm hover:underline"
              >
                  <span>Managing work related stress</span>
                  <ExternalLink size={16} className="text-primary" />
              </a>
              <a 
              href="https://www.mind.org.uk/information-support/tips-for-everyday-living/how-to-be-mentally-healthy-at-work/work-and-stress/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm hover:underline"
            >
                <span>How to be mentally healthy at work</span>
                <ExternalLink size={16} className="text-primary" />
            </a>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
};

export default CrisisSupport;