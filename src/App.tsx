/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Portfolio } from './components/Portfolio';
import { AuditTool } from './components/AuditTool';
import { ClientPortalDemo } from './components/ClientPortalDemo';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { ProjectCaseStudy } from './types';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingNotes, setBookingNotes] = useState('');
  const [estimatorServiceId, setEstimatorServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (notes = '') => {
    setBookingNotes(notes);
    setBookingOpen(true);
  };

  const handleScrollToEstimator = (serviceId?: string) => {
    if (serviceId) {
      setEstimatorServiceId(serviceId);
    }
    const elem = document.getElementById('estimator');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToAudit = () => {
    const elem = document.getElementById('audit-tool');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartSimilarProject = (project: ProjectCaseStudy) => {
    handleOpenBooking(`Inquiry to build a platform similar to ${project.title} (${project.categoryLabel}) for our company.`);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#faf8f5] dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200">
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          onNavigateToEstimator={() => handleScrollToEstimator()}
          onNavigateToAudit={handleScrollToAudit}
        />

        <main id="main-content">
          <Hero
            onOpenEstimator={() => handleScrollToEstimator()}
            onOpenBooking={() => handleOpenBooking()}
            onOpenAudit={handleScrollToAudit}
          />

          <Services
            onSelectServiceForEstimation={(sId) => handleScrollToEstimator(sId)}
            onOpenBooking={() => handleOpenBooking()}
          />

          <ProjectEstimator
            initialServiceId={estimatorServiceId}
            onOpenBooking={() => handleOpenBooking()}
          />

          <Portfolio
            onStartSimilarProject={handleStartSimilarProject}
          />

          <AuditTool
            onOpenBookingWithAudit={(summary) => handleOpenBooking(summary)}
          />

          <ClientPortalDemo />

          <TechStack />

          <Testimonials />

          <ContactSection
            onOpenBooking={() => handleOpenBooking()}
          />
        </main>

        <Footer />

        <BookingModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          prefilledNotes={bookingNotes}
        />
      </div>
    </ThemeProvider>
  );
}
