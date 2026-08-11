import { createCaseStudyGetter } from "..";

import { securityKnowledgeBase as en } from "./en";
import { securityKnowledgeBase as pl } from "./pl";


export const getSecurityKnowledgeBase = createCaseStudyGetter(en, pl);