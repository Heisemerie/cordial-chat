import {
  BirthdayIcon,
  ChartIcon,
  CodeIcon,
  IllustrationIcon,
} from "@/icons/other-icons";
import { useState } from "react";
import { Button, Span } from "@chakra-ui/react";

interface PromptButtonProps {
  icon?: React.ReactElement;
  description: string;
  onClick: () => void;
  selectedPrompt: string;
}

const PromptButton = ({
  icon,
  description,
  onClick,
  selectedPrompt,
}: PromptButtonProps) => {
  return (
    <Button
      variant={selectedPrompt === description ? "surface" : "outline"}
      borderRadius={"full"}
      onClick={onClick}
    >
      {icon}
      <Span color="fg.subtle">{description}</Span>
    </Button>
  );
};

const PrompButtonList = () => {
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const promptButtons = [
    {
      icon: <IllustrationIcon color="green.500" fontSize="lg" />,
      description: "Create Image",
    },
    {
      icon: <CodeIcon color="blue.500" fontSize="lg" />,
      description: "Code",
    },
    {
      icon: <ChartIcon color="cyan.500" fontSize="lg" />,
      description: "Analyze data",
    },
    {
      icon: <BirthdayIcon color="cyan.500" fontSize="lg" />,
      description: "Surpriise me",
    },
    {
      description: "More",
    },
  ];

  return (
    <>
      {promptButtons.map(({ icon, description }, index) => (
        <PromptButton
          icon={icon}
          description={description}
          key={index}
          onClick={() => setSelectedPrompt(description)}
          selectedPrompt={selectedPrompt}
        />
      ))}
    </>
  );
};

export default PrompButtonList;
