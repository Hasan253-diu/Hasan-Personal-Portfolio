import React, { useState } from 'react';
import { Award, ExternalLink, Eye, CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';
import { certificationsData } from '../data/certifications';
import Modal from '../components/Modal';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-6 pb-2">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Certifications & Credentials
            </h2>
            <p className="text-xs text-slate-400">Verified courses, achievements and specializations</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5 overflow-hidden flex flex-col justify-between group hover:shadow-neu-flat dark:hover:shadow-neu-dark-flat transition-all duration-300"
            >
              <div>
                {/* Certificate Preview Image Container */}
                <div className="relative h-44 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Issuer Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-slate-900/90 text-primary backdrop-blur-sm shadow-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                    {cert.issuer}
                  </span>

                  {/* Preview Button */}
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-white text-xs font-semibold shadow-md flex items-center gap-1.5 hover:text-primary transition-colors backdrop-blur-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Preview</span>
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      Issued {cert.issueDate}
                    </span>
                    <span className="font-mono text-[10px] text-slate-500">
                      ID: {cert.credentialId}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-800 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-5 py-3 border-t border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1"
                >
                  <span>Certificate View</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-primary"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || "Certificate Preview"}
        maxWidth="max-w-2xl"
      >
        {selectedCert && (
          <div className="space-y-5">
            {/* Full Image */}
            <div className="rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[400px] object-contain mx-auto"
              />
            </div>

            {/* Certificate Details */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-xs text-slate-400">Issuer</span>
                  <p className="font-bold text-sm text-slate-800 dark:text-white">
                    {selectedCert.issuer}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Issue Date</span>
                  <p className="font-bold text-sm text-slate-800 dark:text-white">
                    {selectedCert.issueDate}
                  </p>
                </div>
                <div>
                  <span className="text-xs text-slate-400">Credential ID</span>
                  <p className="font-mono text-xs font-bold text-primary">
                    {selectedCert.credentialId}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-xs text-slate-400">Curriculum & Topics Covered</span>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {selectedCert.description}
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400">Demonstrated Skills</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {selectedCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold neu-card-sm text-slate-700 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verification Link */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex justify-end">
              <a
                href={selectedCert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl neu-btn-primary text-xs font-semibold text-white shadow-neu-accent"
              >
                <span>Verify Credential on Issuer Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
