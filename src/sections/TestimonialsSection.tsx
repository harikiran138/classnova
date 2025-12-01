import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const feedback = [
  {
    quote: "Before ClassNova, I struggled to keep students engaged. With the kit, lessons are interactive and my workload is lighter. My class is more focused than ever.",
    author: "Dr. Shalini Rao",
    role: "Professor",
    location: "Engineering College, Bengaluru",
    initials: "SR",
    color: "bg-pink-100 text-pink-600"
  },
  {
    quote: "We had no digital tools and felt left behind. After installing ClassNova, our classrooms went digital in minutes. Now, students participate more and I save time every day.",
    author: "Arif Sheikh",
    role: "Science Teacher",
    location: "Pune",
    initials: "AS",
    color: "bg-blue-100 text-blue-600"
  },
  {
    quote: "Budget constraints made upgrades impossible. ClassNova fit our needs perfectly—affordable, easy, and effective. Our teachers are happier and students are learning better.",
    author: "Meera Iyer",
    role: "School Principal",
    location: "Mumbai",
    initials: "MI",
    color: "bg-purple-100 text-purple-600"
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="stories" className="section-padding bg-slate-50 border-t border-slate-200">
      <div className="section-shell">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 h-12 rounded-full bg-brand-blue-100 flex items-center justify-center mx-auto text-brand-blue-600 mb-6"
          >
            <Quote className="w-6 h-6 fill-current" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by educators across India
          </h2>
          <p className="text-lg text-slate-600">
            See how ClassNova is transforming classrooms in real schools.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {feedback.map((item, idx) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed text-lg font-medium">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}, {item.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
