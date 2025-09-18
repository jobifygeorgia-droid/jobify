"use client";

import classnames from "classnames";
import { ComponentProps, useState } from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { generateRandomId } from "@/lib/utils/generateRandomId";

import { KeyboardArrowRight } from "./icons";

type AccordionT = {
  panels: Array<{
    name: string;
    title: string;
    explanation?: string;
    details: string;
  }>;
  expandFirstChild?: boolean;
};

type MuiAccordionProps = ComponentProps<typeof MuiAccordion>;

const accordionSlotProps: MuiAccordionProps["slotProps"] = {
  root: {
    sx: {
      boxShadow: "unset",
      borderRadius: "0px",
      margin: "0px !important",

      "&.Mui-expanded::before,&::before": {
        background: "#D9D9D9",
        opacity: 100,
      },
    },
  },
  heading: {
    sx: {
      button: {
        minHeight: "unset !important",
        padding: "0px 10px",

        "& .MuiAccordionSummary-content": {
          margin: "25px 0px !important",
        },
      },

      border: "0px",
    },
  },
  region: {
    sx: {
      "& .MuiAccordionDetails-root": {
        padding: "0px 10px 20px 10px",
      },
    },
  },
};

const Accordion: React.FC<AccordionT> = (props) => {
  const { panels, expandFirstChild = true } = props;

  const [expandedPanel, setExpandedPanel] = useState<string | false>(() =>
    expandFirstChild ? panels[0].name : false
  );

  const handleChange = (panel: string) => (_: unknown, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  return panels.map((panel) => (
    <MuiAccordion
      key={generateRandomId()}
      expanded={expandedPanel === panel.name}
      onChange={handleChange(panel.name)}
      slotProps={accordionSlotProps}
    >
      <AccordionSummary
        expandIcon={
          <KeyboardArrowRight
            size={32}
            className={classnames("-rotate-90", {
              "text-orange": panel.name === expandedPanel,
            })}
          />
        }
        aria-controls={`panel-${panel.name}-content"`}
        id={`panel-${panel.name}-header"`}
      >
        <span className="text-md font-bold text-primary">{panel.title}</span>
        {panel.explanation && <span>{panel.explanation}</span>}
      </AccordionSummary>

      <AccordionDetails>
        <p className="text-secondary">{panel.details}</p>
      </AccordionDetails>
    </MuiAccordion>
  ));
};

export default Accordion;
