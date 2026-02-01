

import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { htw, problemStats, services } from "../constants";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-linear-to-br from-indigo-500/40 via-slate-950 to-emerald-500/50"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent"
        />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInDown}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium"
            >
              <Sparkles size={16} />
              <span>Designed for Hostel Students</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
            >
              Say Goodbye to
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block mt-2 bg-linear-to-r from-indigo-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent"
              >
                Money Chaos
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-xl lg:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
            >
              The ultimate budgeting app for hostel life. Track expenses, split
              bills automatically, and keep your roommate relationships
              drama-free.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
            >
              <Link to={"dashboard"}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center gap-2 cursor-pointer"
                >
                  Get Started Free
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12"
            >
              {[
                { value: "25+", label: "Active Users" },
                { value: "₹50K+", label: "Managed Monthly", color: "text-emerald-400" },
                { value: "98%", label: "Satisfaction", color: "text-indigo-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color || "text-white"}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              We Know Your Struggles
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Managing expenses in hostel life shouldn't feel like solving a
              puzzle
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {problemStats.map((problem, index) => {
              const Icon = problem.icon;
              const colorClasses = {
                rose: "bg-rose-500/10 border-rose-500/20 text-rose-400",
                amber: "bg-amber-500/10 border-amber-500/20 text-amber-400",
                indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
              };

              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all duration-300 hover:shadow-xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    className={`inline-flex p-3 rounded-xl ${colorClasses[problem.color]} mb-6`}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Everything You Need,
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="block mt-2 bg-linear-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent"
              >
                Nothing You Don't
              </motion.span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400 max-w-2xl mx-auto"
            >
              Built specifically for students, by students who understand the
              struggle
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-x-hidden"
          >
            {services.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={isEven ? slideInLeft : slideInRight}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="group bg-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 md:p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                    >
                      <Icon size={28} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <motion.ul
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-2"
                      >
                        {feature.features.map((item, i) => (
                          <motion.li
                            key={i}
                            variants={fadeInUp}
                            className="flex items-center gap-2 text-sm text-slate-500"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-emerald-400"
                            />
                            {item}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Simple. Clean. Effective.
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-slate-400"
            >
              Get started in three easy steps
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {htw.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-indigo-500/50 transition-all duration-300"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="text-6xl font-bold bg-linear-to-br from-indigo-400 to-emerald-400 bg-clip-text text-transparent mb-6"
                  >
                    {step.step}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
                {index < 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="hidden md:block absolute top-1/2 -right-7 transform -translate-y-1/2"
                  >
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight size={24} className="text-slate-700" />
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-indigo-500/20 to-emerald-500/20 border border-indigo-500/30 rounded-3xl p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Take Control?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-md md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              Join hundreds of students who've made hostel budgeting effortless
            </motion.p>
            <Link to="/dashboard">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group px-5 md:px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 inline-flex items-center gap-3 cursor-pointer"
              >
                Start Your Free Journey
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-2 transition-transform"
                />
              </motion.button>
            </Link>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-sm text-slate-500 mt-6"
            >
              No credit card required • Free forever • Cancel anytime
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-6 text-center"
        >
          <div className="text-slate-500 text-sm">
            <p>Made with ❤️ for hostel students everywhere</p>
            <p className="mt-2">
              © {new Date().getFullYear()}{" "}
              <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-base font-semibold">
                RoomSplit
              </span>
              . All rights reserved.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Home;