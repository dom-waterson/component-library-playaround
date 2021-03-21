import SidebarComponent from "@/components/Sidebar";

export default {
  title: "Layout/Sidebar",
  component: SidebarComponent,
  decorators: [
    (Story) => (
      <div
        style={{ display: "flex", height: "100vh", backgroundColor: "gray" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Sidebar = () => <SidebarComponent />;
