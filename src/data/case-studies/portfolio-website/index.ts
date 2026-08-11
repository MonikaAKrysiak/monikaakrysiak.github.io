import { createCaseStudyGetter } from "..";

import { portfolioWebsite as en } from "./en";
import { portfolioWebsite as pl } from "./pl";


export const getPortfolioWebsite = createCaseStudyGetter(en, pl);