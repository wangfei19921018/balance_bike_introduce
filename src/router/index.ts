import { createRouter, createWebHistory } from "vue-router";
import CompanyProfile from "../views/company_profile/CompanyProfile.vue";
import BeginnerTutorial from "../views/beginner_tutorial/BeginnerTutorial.vue";
import UserManual from "../views/user_manual/UserManual.vue";
import CommonProblem from "../views/common_problem/CommonProblem.vue";
import PrecautionsWarnings from "../views/precautions_warnings/PrecautionsWarnings.vue";
import BasicParameters from "../views/basic_parameters/BasicParameters.vue";
import NativeID from "../views/native_id/NativeID.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/company_profile",
      name: "company_profile",
      component: CompanyProfile,
    },
    {
      path: "/beginner_tutorial",
      name: "beginner_tutorial",
      component: BeginnerTutorial,
    },
    {
      path: "/user_manual",
      name: "user_manual",
      component: UserManual,
    },
    {
      path: "/common_problem",
      name: "common_problem",
      component: CommonProblem,
    },
    {
      path: "/precautions_warnings",
      name: "precautions_warnings",
      component: PrecautionsWarnings,
    },
    {
      path: "/basic_parameters",
      name: "basic_parameters",
      component: BasicParameters,
    },
    {
      path: "/native_id",
      name: "native_id",
      component: NativeID,
    },
  ],
});

export default router;
