import {test} from "@playwright/test"

import { login } from "../../pages/LoginPage"
import { createRail } from "../../pages/Rail/RailCreationPage"

test ("Creation Rail", async({page})=>{

   await login(page);

   const railData = {
    rakeId:              process.env.RAKE_ID            ?? `RAKE${Date.now()}`,
    contractNo:          process.env.CONTRACT_NO        ?? "CONTR/2025-26/39",
    noOfWagons:          process.env.NO_OF_WAGONS       ?? "52",
    wagonType:           process.env.WAGON_TYPE         ?? "FLAT WAGONS",
    washeryName:         process.env.WASHERY_NAME       ?? "APPDCL",
    sickWagons:          process.env.SICK_WAGONS        ?? "0",
    loadOperationType:   process.env.LOAD_OPERATION_TYPE ?? "MECHANICAL",
    toLocation:          process.env.TO_LOCATION        ?? "Krishnapatnam port",
    fromLocation:        process.env.FROM_LOCATION      ?? "APLAT",
    dateOfLoading:             process.env.DATE_OF_LOADING           ?? "29-06-2026",
   };

   await createRail(page, railData);
})
