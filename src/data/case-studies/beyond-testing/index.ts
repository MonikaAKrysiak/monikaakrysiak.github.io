import { createCaseStudyGetter } from "..";

import { beyondTesting as en } from "./en";
import { beyondTesting as pl } from "./pl";


export const getBeyondTesting = createCaseStudyGetter(en, pl);