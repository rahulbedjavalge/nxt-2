# Nxt Action — Personal Compliance + Actions Engine: Full Product Requirements Document (PRD)

## Executive Summary

**Product Name:** Nxt Action — Personal Compliance + Actions Engine  
**Version:** 1.0 (MVP)  
**Target Launch:** Q2 2026  
**Target Audience:** Freelancers, Small to Medium Businesses (SMBs), and B2B teams in Europe, focusing on regulatory compliance for sectors like AI, data protection, labor, and taxation.  
**Core Value Proposition:** Transform complex legal and regulatory texts into actionable "next actions" with deadlines, evidence tracking, and personalized compliance workflows. Users no longer need to read laws—they just do the next action.  
**Key Differentiators:** Action-first approach, AI-powered extraction, EU-focused privacy and data sovereignty, lightweight and personal tool.  

## Problem Statement

In 2026 Europe, regulatory landscape is increasingly complex with laws like the AI Act, GDPR, DSA, NIS2, and evolving tax and labor regulations. SMBs and freelancers face:

- **Regulatory Overload:** Laws are accessible but not actionable, leading to confusion and missed obligations.
- **Time and Resource Waste:** Hours spent reading legal documents, resulting in lost productivity and potential penalties.
- **Evidence Tracking Challenges:** Difficulty proving compliance during audits due to scattered or missing documentation.
- **Privacy Concerns:** EU users demand data sovereignty and control over personal/business data.

Existing compliance tools are enterprise-focused, expensive, and legal-heavy, leaving a gap for personal, action-oriented solutions.

## Solution Overview

Nxt Action is an AI-powered compliance engine that:

1. **Ingests Documents:** Users upload or link regulatory documents, contracts, policies, and guidelines.
2. **Extracts Obligations:** AI identifies must-do actions, deadlines, and required evidence.
3. **Generates Actions:** Converts extractions into "Nxt Actions" with plain-English explanations, priorities, and citations.
4. **Tracks Progress:** Provides an Action Board for managing tasks, deadlines, and proof collection.
5. **Ensures Proof:** Includes a Proof Vault for uploading and linking evidence.

The workflow: **Setup → Upload/Link → Extraction → Action Board → Proof Vault**.

## Market Opportunity

- **Market Size:** Growing EU compliance market, with SMBs representing 99% of businesses. Estimated addressable market for compliance tools: €10B+ by 2026.
- **Competitive Landscape:** Tools like Compliance Week, NAVEX, or OneTrust are enterprise-focused. Nxt Action targets the underserved personal/SMB segment with an action-first, AI-driven approach.
- **Go-To-Market Strategy:**
  - **Phase 1:** Freemium model with basic scans free; premium for advanced features.
  - **Channels:** YouTube/TikTok demos, partnerships with accountants/legal consultants, shareable compliance reports.
  - **Viral Loop:** Team invites and shareable PDFs to drive adoption.

## User Personas

1. **Freelancer (Primary):** Solo operator needing quick compliance checks for AI tools, data handling, or tax filings.
2. **SMB Owner:** Managing compliance for small teams, focusing on GDPR, labor laws, and sector-specific regs.
3. **B2B Compliance Manager:** Using Nxt Action for team task assignment and audit preparation.

## Core Features (MVP)

### 1. Compliance Scope Selector
- User inputs: Country, Sector (e.g., AI, Finance, Healthcare), Company Size.
- System loads pre-built regulatory bundles (e.g., EU AI Act for AI sector).
- UI: Dropdowns and wizards for easy selection.

### 2. Document Ingest + OCR
- Support for PDF, DOCX, images (via OCR).
- Upload via drag-and-drop or link to cloud storage.
- Processing: Extract text, structure (headings, sections).

### 3. Obligation Extraction Engine
- AI Pipeline:
  - **Parser:** OCR + structural extraction.
  - **Classifier:** Detect obligations (must/shall/required), deadlines, evidence needs.
  - **Synthesizer:** Convert to task format with title, deadline, priority, reason, evidence list.
  - **Citation Engine:** Link back to source documents for traceability.
- Output: Structured "Nxt Action" objects.

### 4. Action Board
- Dashboard view of actions, sorted by deadline, severity, importance.
- Each action card: Title, explanation, deadline, source citation, evidence checklist.
- Interactions: Mark complete, snooze, assign to team members.

### 5. Deadline Tracker
- Calendar integration for reminders.
- Notifications for approaching/overdue actions.
- Risk scoring based on legal importance.

### 6. Proof Vault
- Upload documents, screenshots, links as evidence.
- Link evidence to specific actions.
- Audit trail: Timestamped uploads with metadata.

## Technical Architecture

### Backend Services
- **Document Ingestion Service:** Handles uploads, OCR, initial parsing.
- **Extraction Pipeline:** AI models for obligation detection and synthesis.
- **Rule Classifier:** Matches user profile to regulatory bundles.
- **Action Builder:** Creates and manages Nxt Action objects.
- **Evidence Storage:** Secure storage with encryption.

### AI Components
- **Models:** Use open-source LLMs (e.g., GPT-based or fine-tuned) for extraction; ensure no user data training.
- **Integration:** API calls to AI services (e.g., OpenAI or self-hosted).

### Storage
- **Database:** PostgreSQL for actions, users, jurisdictions.
- **File Storage:** S3-compatible (e.g., AWS S3 or EU-hosted alternatives) for documents.
- **Vector DB:** For semantic search and retrieval of similar obligations.

### Security & Privacy
- EU-only data storage (e.g., Frankfurt region).
- End-to-end encryption.
- No AI training on user data.
- Audit logs for all actions.
- Optional on-prem deployment for enterprises.

### Deployment
- Cloud-native: Kubernetes or serverless (e.g., Vercel/AWS Lambda).
- Scalable to handle document processing loads.

## Development Roadmap (8-12 Weeks)

### Phase 1: Foundation (Weeks 1-2)
- Design database schema (Actions, Documents, Evidence, Jurisdictions).
- Set up document upload pipeline with OCR.
- Implement basic parsing and storage.

### Phase 2: Obligation Extraction (Weeks 3-5)
- Build AI classifiers for obligations, deadlines, citations.
- Create Nxt Action object schema.
- Integrate extraction pipeline.

### Phase 3: Action Board + Proof Vault (Weeks 6-8)
- Develop UI for Action Board (React/Next.js).
- Implement evidence upload and linking.
- Add deadline tracking and notifications.

### Phase 4: Compliance Bundles (Weeks 9-10)
- Map countries/sectors to regulatory bundles.
- Add auto-suggestions based on user profile.

### Phase 5: Polishing (Weeks 11-12)
- Build audit trail export and PDF reports.
- Refine onboarding flow.
- Testing, security audits, and launch prep.

## User Experience (UX) Design

- **Onboarding:** Simple wizard for scope selection and first upload.
- **Dashboard:** Clean, card-based layout with priority sorting.
- **Mobile-Friendly:** Responsive design for on-the-go compliance checks.
- **Accessibility:** WCAG 2.1 compliant.

## Success Metrics

- **User Acquisition:** 10,000 sign-ups in first 6 months.
- **Engagement:** 70% monthly active users completing actions.
- **Retention:** 60% user retention at 3 months.
- **Compliance Impact:** User-reported time savings (target: 5+ hours/week).

## Risks & Mitigations

- **AI Accuracy:** Risk of false positives in extraction. Mitigation: Human-in-the-loop validation for high-risk actions.
- **Regulatory Changes:** Laws evolve. Mitigation: Update bundles quarterly with expert input.
- **Data Privacy:** EU scrutiny. Mitigation: Strict GDPR compliance, no data sharing.

## Conclusion

Nxt Action bridges the gap between legal complexity and actionable compliance, empowering users to "do the next action" without the overwhelm. This PRD outlines the path to a market-ready MVP, poised to capture the growing demand for personal compliance tools in Europe.

## Appendices

- **Example Nxt Action:** As detailed in original plan.
- **Wireframes:** [Placeholder for diagrams].
- **API Specifications:** [To be defined].

---

*This document is based on the expanded plan in 'prd-2' and expanded for completeness.*
