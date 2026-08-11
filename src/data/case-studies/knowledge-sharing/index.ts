import { createCaseStudyGetter } from "..";

import { knowledgeSharing as en } from "./en";
import { knowledgeSharing as pl } from "./pl";


export const getKnowledgeSharing = createCaseStudyGetter(en, pl);