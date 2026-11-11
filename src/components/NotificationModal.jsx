import React from 'react';
import { Bell, CheckCircle2, Briefcase, Sparkles, X } from 'lucide-react';

export default function NotificationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: "Available for New Opportunities",
      desc: "Open for Full-time Software Engineering roles and high-impact web projects.",
      time: "Current Status",
      icon: Briefcase,
      color: "text-emerald-500 bg-emerald-500/10"
    },
    {
      id: 2,
      title: "Hospital Queue System Launched",
      desc: "Check out the new real-time queue management web app in the projects section.",
      time: "Recent Update",
      icon: Sparkles,
      color: "text-primary bg-primary/10"
    },
    {
      id: 3,
      title: "2026 Resume Updated",
      desc: "Fresh downloadable PDF resume ready with latest projects and coursework.",
      time: "Updated Today",
      icon: CheckCircle2,
      color: "text-blue-500 bg-blue-500/10"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-md p-6 rounded-3xl neu-card relative animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 dark:text-white text-base">Notifications</h3>
              <p className="text-xs text-slate-400">Activity & Status Updates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl neu-button text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 space-y-3">
          {notifications.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                className="p-3.5 rounded-2xl bg-white/50 dark:bg-slate-800/50 shadow-sm border border-white/60 dark:border-white/5 flex gap-3 items-start"
              >
                <div className={`p-2 rounded-xl shrink-0 ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-800 dark:text-white">{item.title}</h4>
                    <span className="text-[10px] text-slate-400 font-medium">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl neu-button text-xs font-semibold text-slate-700 dark:text-slate-300"
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
