import React from "react";
import Layout from "@/components/Layout";
import ProductModulesSection from "@/components/ProductModulesSection";

const Modules = () => {
  return (
    <Layout>
      <div className="pt-20">
        <div className="text-center mb-8 px-6 pt-12">
          <h1 className="text-4xl md:text-6xl font-black text-gradient mb-6">
            Open-Core AI Modules
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto font-light">
            Our premium APIs sit atop our open-source MIT-licensed foundations. Explore the purpose-built Small Language Model (SLM) tools designed specifically for Indian MSMEs.
          </p>
        </div>
        <ProductModulesSection />
      </div>
    </Layout>
  );
};

export default Modules;
