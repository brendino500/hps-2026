export type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    role: "Marketing Director",
  },
  {
    id: 2,
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
    role: "Software Engineer",
  },
  {
    id: 3,
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Michael Brown",
    role: "CEO",
  },
  {
    id: 4,
    quote:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Emily Davis",
    role: "Project Manager",
  },
];
