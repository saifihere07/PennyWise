import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        '" Super easy to use and keeps my budget on track. Pennywise is a must-have! "',
      name: "Micheal R.",
      designation: "Product Manager at TechFlow",
      src: "/review.jpg",
    },
    {
      quote:
        '" As a student, managing money can be tough. PennyWise has made it so easy to track my expenses and plan for the future. I recommend it to all my friends! "',
      name: "Michael Rodriguez",
      name: "Robert J.",
      designation: "CTO at InnovateSphere",
      src: "/review 5.jpg",
    },
    {
      quote: '" PennyWise helped me save for my dream vacation! "',
      name: "Charles Watson",
      designation: "Operations Director at CloudScale",
      src: "/review 4.jpg",
    },
    {
      quote:
        '" I have tried countless budgeting platforms, but PennyWise is by far the best. It is user-friendly and has helped me save over 20% of my income in just six months! "',
      name: "James Kim",
      name: "James Luis",
      designation: "Engineering Lead at DataPro",
      src: "/review 3.jpg",
    },
    {
      quote:
        '" PennyWise transformed how I manage my business finances. The tools are intuitive, and the insights are invaluable. I finally feel in control of my budget! "',
      name: "Lisa Thompson",
      name: "Matt Walls",
      designation: "VP of Technology at FutureNet",
      src: "/review 2.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
