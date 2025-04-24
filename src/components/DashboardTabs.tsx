import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Activity, Heart, BookOpen } from "lucide-react";
import Summary from "@/pages/Summary";
import Progress from "@/components/Progress";
import Actions from "@/components/Actions";
import JournalChat from "@/components/JournalChat";

const DashboardTabs = () => {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid grid-cols-4 gap-4 mb-8">
        <TabsTrigger value="summary" className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <span>Summary</span>
        </TabsTrigger>
        <TabsTrigger value="progress" className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          <span>Progress</span>
        </TabsTrigger>
        <TabsTrigger value="actions" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          <span>Actions</span>
        </TabsTrigger>
        <TabsTrigger value="journal" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" />
          <span>Journal</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <Summary />
      </TabsContent>
      <TabsContent value="progress">
        <Progress />
      </TabsContent>
      <TabsContent value="actions">
        <Actions />
      </TabsContent>
      <TabsContent value="journal">
        <JournalChat />
      </TabsContent>
    </Tabs>
  );
};

export default DashboardTabs;