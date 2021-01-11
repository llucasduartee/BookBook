import VisitorPage from "../../pages/visitor-page";
import Shelves from "../../pages/shelves";
import SearchBooks from "../../pages/search-books/";
import TimeLine from "../../pages/timeline";
import FriendsPage from "../../pages/friends-page";
import Login from "../../pages/login";
import Profile from "../../pages/profile";

export const restrictedArea = [
  { path: "/timeline", name: "Timeline", component: TimeLine },
  { path: "/search-books", name: "SearchBooks", component: SearchBooks },
  { path: "/shelves", name: "Shelves", component: Shelves },
  { path: "/profile", name: "Profile", component: Profile },
  { path: "/friends-page/:id", name: "FriendsPage", component: FriendsPage },
];

export const freeArea = [
  { path: "/", name: "Login", component: Login },
  { path: "/visitor-page", name: "VisitorPage", component: VisitorPage },
];
