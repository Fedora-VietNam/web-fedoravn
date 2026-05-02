import { Code, Palette, PenTool, Globe, Cpu, Wifi, Terminal, Zap, FileText, Users, MessageCircle, Download, Settings } from "lucide-react"

/**
 * @brief A static list of documentation articles used for search and navigation.
 */
export const docsArticles = [
  { id: "intro", title: "Introduction to Fedora Vietnam", category: "Getting Started" },
  { id: "usb", title: "Creating a Bootable USB", category: "Installation" },
  { id: "dual-boot", title: "Standard Dual Boot with Windows", category: "Installation" },
  { id: "input", title: "Configuring Vietnamese Input", category: "System Setup" },
  { id: "docker", title: "Setting up Docker on Fedora", category: "Development" },
  { id: "chuẩn-bị-cài-đặt", title: "1) Chuẩn bị cài đặt", category: "Getting Started" },
  { id: "cấu-hình-sau-cài", title: "2) Cấu hình sau cài", category: "System Setup" },
  { id: "môi-trường-làm-việc", title: "3) Môi trường làm việc", category: "Development" },
  { id: "cài-fedora-dual-boot-với-windows", title: "Cài Fedora dual-boot với Windows", category: "Installation" },
  { id: "fix-lỗi-wi-fi,-bluetooth,-âm-thanh", title: "Fix lỗi Wi-Fi, Bluetooth, âm thanh", category: "Troubleshooting" },
  { id: "thiết-lập-môi-trường-dev-chuẩn", title: "Thiết lập môi trường Dev chuẩn", category: "Development" },
  { id: "tối-ưu-hiệu-năng-desktop-fedora", title: "Tối ưu hiệu năng desktop Fedora", category: "System Setup" }
]

/**
 * @brief A static list of forum topics used for search and display in the community section.
 */
export const forumTopics = [
  {
    id: "1",
    title: "Upgrading to Fedora 40: Workstation installation hangs at 80%",
    author: "linux_pioneer",
    time: "2h ago",
    category: "Installation",
    replies: 42,
    views: "1.2k",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer",
  },
  {
    id: "2",
    title: "RFC: Proposed changes to DNF package manager backend for F41",
    author: "fedora_core",
    time: "5h ago",
    category: "Development",
    replies: 128,
    views: "5.8k",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core",
  },
  {
    id: "3",
    title: "Best laptop for Fedora 40? Looking for something with long battery life.",
    author: "hardware_enthusiast",
    time: "12h ago",
    category: "General Support",
    replies: 15,
    views: 450,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hardware",
  },
  {
    id: "4",
    title: "Fedora 40 KDE Plasma 6: Screen flickering on Wayland with NVIDIA",
    author: "plasma_fan",
    time: "1d ago",
    category: "Bugs",
    replies: 89,
    views: "2.4k",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=plasma",
  },
]

export const eventItems = [
  {
    day: 3,
    title: "CoreOS Office Hours",
    type: "workshop",
    color: "bg-blue-100 text-blue-900 border-blue-500",
  },
  {
    day: 8,
    title: "Council Meeting",
    type: "meeting",
    color: "bg-emerald-100 text-emerald-900 border-emerald-500",
  },
  {
    day: 10,
    title: "F41 Release Party",
    type: "event",
    color: "bg-brand-primary/10 text-brand-primary border-brand-primary",
  },
  {
    day: 16,
    title: "Security SIG Workshop",
    type: "workshop",
    color: "bg-rose-100 text-rose-900 border-rose-500",
  },
  {
    day: 24,
    title: "Workstation WG Meeting",
    type: "meeting",
    color: "bg-blue-100 text-blue-900 border-blue-500",
  },
]

export const featuredEvent = {
  title: "Fedora Linux 41 Global Launch",
  date: "Oct 10, 2024",
  desc: "Experience the future of Linux with the official 41 release party. Keynote speakers, technical demos, and live Q&A sessions.",
  attendees: 142,
  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1470&auto=format&fit=crop",
}

export const contributionPaths = [
  {
    title: "Kernel & Packages",
    cat: "Development",
    desc: "Help us package the latest software or contribute directly to the Linux Kernel. We use Git and Pagure for our primary workflows.",
    icon: Code,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop",
    linkText: "Explore Repo",
  },
  {
    title: "UI, UX & Branding",
    cat: "Visual Arts",
    desc: "From wallpapers to interface icons, Fedora Design team creates the visual identity. Join our open design sessions.",
    icon: Palette,
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1464&auto=format&fit=crop",
    linkText: "View Portfolio",
  },
  {
    title: "Technical Writing",
    cat: "Documentation",
    desc: "Excellent software needs excellent guides. Help us document features, create tutorials, and maintain our wiki.",
    icon: PenTool,
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1373&auto=format&fit=crop",
    linkText: "Write Now",
  },
  {
    title: "L10n & Global Outreach",
    cat: "Translation",
    desc: "Help us translate Fedora into your language. Make computing accessible to everyone, regardless of where they live.",
    icon: Globe,
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop",
    linkText: "Join L10n",
  },
]

export const forumComments = [
  { author: "fedora_admin", text: "Chào mừng bạn đến với cộng đồng Fedora Việt Nam! Chúng tôi sẽ phản hồi thắc mắc của bạn sớm nhất có thể.", time: "1h ago" },
  { author: "linux_expert", text: "Tôi cũng gặp vấn đề tương tự. Bạn hãy thử kiểm tra lại driver trong RPM Fusion xem sao.", time: "30m ago" },
]

export const validArticleSlugs = [
  "download", "guide", "install", "setting", "troubleshoot",
  "1)-chuẩn-bị-cài-đặt", "2)-cấu-hình-sau-cài", "3)-môi-trường-làm-việc",
  "cài-fedora-dual-boot-với-windows", "fix-lỗi-wi-fi,-bluetooth,-âm-thanh",
  "thiết-lập-môi-trường-dev-chuẩn", "tối-ưu-hiệu-năng-desktop-fedora",
  "intro", "usb", "dual-boot", "input", "docker"
]

export const contributors = [
  { name: "Fedora Core", role: "Administrator", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=core" },
  { name: "Linux Pioneer", role: "Core Team", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pioneer" },
  { name: "Hardware Pro", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hardware" },
  { name: "User 01", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user1" },
  { name: "User 02", role: "Contributor", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user2" },
]

export const featuredGuidesData = [
  { titleKey: "guides-c1t", descKey: "guides-c1d", tag: "GUIDE", icon: Cpu },
  { titleKey: "guides-c2t", descKey: "guides-c2d", tag: "TROUBLESHOOT", icon: Wifi },
  { titleKey: "guides-c3t", descKey: "guides-c3d", tag: "DEV", icon: Terminal },
  { titleKey: "guides-c4t", descKey: "guides-c4d", tag: "PERFORMANCE", icon: Zap },
]

export const communityCardItems = [
  { titleKey: "community-card1-t", descKey: "community-card1-d", icon: FileText, href: "/docs" },
  { titleKey: "community-card2-t", descKey: "community-card2-d", icon: Users, href: "#community-links" },
  { titleKey: "community-card3-t", descKey: "community-card3-d", icon: MessageCircle, href: "/forum" },
]

export const whyFedoraItems = [
  { titleKey: "why-item1-t", descKey: "why-item1-d" },
  { titleKey: "why-item2-t", descKey: "why-item2-d" },
  { titleKey: "why-item3-t", descKey: "why-item3-d" },
  { titleKey: "why-item4-t", descKey: "why-item4-d" },
]

export const quickStartItems = [
  { titleKey: "start-c1t", descKey: "start-c1d", icon: Download, tag: "Install" },
  { titleKey: "start-c2t", descKey: "start-c2d", icon: Settings, tag: "Setup" },
  { titleKey: "start-c3t", descKey: "start-c3d", icon: Terminal, tag: "Productivity" },
]
