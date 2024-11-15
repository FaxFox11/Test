 
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Sparkles, Globe, Rocket, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences that captivate and convert.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Web Development",
      description: "Building robust, scalable applications with cutting-edge technologies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Crafting comprehensive digital strategies that drive growth and innovation.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Maximizing speed and efficiency for optimal user experience.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Solutions",
      description: "Implementing robust security measures to protect digital assets.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation Lab",
      description: "Exploring emerging technologies to keep you ahead of the curve.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming businesses through innovative digital solutions and cutting-edge technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-colors">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-sm">
                  <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent font-medium`}>
                    Learn more
                  </span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;