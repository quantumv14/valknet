"use client";

import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft, Calendar, User, Clock, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Types
interface NewsArticle {
  id: number;
  title: string;
  content: string;
  reporter: string;
  date: string;
  time: string;
}

// Sample news data - in a real app this would come from a database
const initialNews: NewsArticle[] = [
  {
    id: 1,
    title: "Major Botnet Takedown Operation Completed",
    content: "Valknet Security successfully coordinated with international law enforcement to dismantle the Zeus banking trojan network, affecting over 50,000 infected devices worldwide. The operation took 72 hours and resulted in the arrest of key cybercriminals.",
    reporter: "0x5872",
    date: "2025-11-08",
    time: "14:30"
  },
  {
    id: 2,
    title: "New AI-Powered Threat Detection Released",
    content: "Horus AI now features advanced behavioral analysis capabilities that can detect zero-day malware with 99.8% accuracy. The update includes improved machine learning models trained on the latest threat intelligence data.",
    reporter: "0x5872",
    date: "2025-11-05",
    time: "09:15"
  },
  {
    id: 3,
    title: "Watchdog Antivirus Blocks Record Number of Threats",
    content: "In October 2025, Watchdog successfully blocked over 2.4 million malware attempts, representing a 34% increase from the previous month. The surge is attributed to increased ransomware campaigns targeting enterprise networks.",
    reporter: "0x5872",
    date: "2025-11-01",
    time: "16:45"
  }
];

export default function NewsPage() {
  const [news, setNews] = useState(initialNews);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    reporter: ""
  });

  const handleAddNews = () => {
    if (formData.title && formData.content && formData.reporter) {
      const newArticle = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toTimeString().split(' ')[0].substring(0, 5)
      };
      setNews([newArticle, ...news]);
      setFormData({ title: "", content: "", reporter: "" });
      setShowAddForm(false);
    }
  };

  const handleEditNews = (article: NewsArticle) => {
    setEditingNews(article.id);
    setFormData({
      title: article.title,
      content: article.content,
      reporter: article.reporter
    });
    setShowAddForm(true);
  };

  const handleUpdateNews = () => {
    if (formData.title && formData.content && formData.reporter) {
      setNews(news.map((article: NewsArticle) => 
        article.id === editingNews 
          ? { ...article, ...formData }
          : article
      ));
      setFormData({ title: "", content: "", reporter: "" });
      setShowAddForm(false);
      setEditingNews(null);
    }
  };

  const handleDeleteNews = (id: number) => {
    setNews(news.filter((article: NewsArticle) => article.id !== id));
  };

  const handleCancel = () => {
    setFormData({ title: "", content: "", reporter: "" });
    setShowAddForm(false);
    setEditingNews(null);
  };

  return (
    <div className="min-h-screen bg-black text-white gradient-mesh noise-texture">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-[#24a0af]" />
            <span className="text-xl font-bold">Valknet Security</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="hover:bg-white/10 fast-button-hover">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* News Page Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Security News</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Latest updates, threat intelligence, and security insights from Valknet Security
            </p>
            
            {/* Add News Button */}
            <Button 
              onClick={() => setShowAddForm(true)}
              className="bg-[#24a0af] hover:bg-[#1a5b60] text-white fast-button-hover"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add News Article
            </Button>
          </div>

          {/* Add/Edit News Form */}
          {showAddForm && (
            <div className="bg-gradient-to-br from-[#1a5b60]/20 to-black/50 p-8 rounded-xl border border-[#24a0af]/20 mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {editingNews ? "Edit News Article" : "Add New Article"}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, title: e.target.value})}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                    placeholder="Enter article title..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, content: e.target.value})}
                    rows={4}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none resize-none"
                    placeholder="Enter article content..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Reporter</label>
                  <input
                    type="text"
                    value={formData.reporter}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, reporter: e.target.value})}
                    className="w-full p-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-[#24a0af] focus:outline-none"
                    placeholder="Enter reporter name..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={editingNews ? handleUpdateNews : handleAddNews}
                    className="bg-[#24a0af] hover:bg-[#1a5b60] text-white fast-button-hover"
                  >
                    {editingNews ? "Update Article" : "Publish Article"}
                  </Button>
                  <Button 
                    onClick={handleCancel}
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10 fast-button-hover"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* News Articles */}
          <div className="space-y-8">
            {news.map((article: NewsArticle) => (
              <article key={article.id} className="bg-gradient-to-br from-[#1a5b60]/10 to-black/50 p-8 rounded-xl border border-[#24a0af]/20">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white mb-2 flex-1">{article.title}</h2>
                  <div className="flex gap-2 ml-4">
                    <Button
                      onClick={() => handleEditNews(article)}
                      size="sm"
                      variant="ghost"
                      className="hover:bg-white/10 fast-button-hover"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDeleteNews(article.id)}
                      size="sm"
                      variant="ghost"
                      className="hover:bg-red-500/20 text-red-400 fast-button-hover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{article.reporter}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">{article.content}</p>
              </article>
            ))}
          </div>

          {news.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">No news articles yet</h3>
              <p className="text-gray-500 mb-8">Be the first to add a security news update!</p>
              <Button 
                onClick={() => setShowAddForm(true)}
                className="bg-[#24a0af] hover:bg-[#1a5b60] text-white fast-button-hover"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add First Article
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Valknet Security. All rights reserved. Protecting enterprises worldwide.</p>
        </div>
      </footer>
    </div>
  );
}
