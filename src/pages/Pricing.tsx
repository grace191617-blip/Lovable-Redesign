import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, Minus } from "lucide-react";

/* ─── helpers ─── */
const CTA = ({ label = "Schedule a Consultation" }: { label?: string }) => (
  <Button variant="gold" asChild className="mt-6">
    <Link to="/consultation">
      {label} <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </Button>
);

const Cell = ({ v }: { v: string }) => {
  if (v === "✔") return <Check className="h-4 w-4 text-accent mx-auto" />;
  if (v === "—") return <Minus className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
  return <span>{v}</span>;
};

const ResponsiveTable = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) => (
  <div className="w-full overflow-x-auto -mx-1">
    <table className="w-full min-w-[640px] text-sm border-collapse">
      <thead>
        <tr className="border-b border-border">
          {headers.map((h, i) => (
            <th
              key={i}
              className={`py-3 px-3 font-semibold text-foreground ${i === 0 ? "text-left" : "text-center"} ${i === 0 ? "w-[40%]" : ""}`}
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
            {row.map((cell, ci) => (
              <td
                key={ci}
                className={`py-3 px-3 ${ci === 0 ? "text-left font-medium" : "text-center"}`}
              >
                <Cell v={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SimpleTable = ({
  rows,
}: {
  rows: string[][];
}) => (
  <div className="w-full overflow-x-auto -mx-1">
    <table className="w-full min-w-[480px] text-sm border-collapse">
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
            {row.map((cell, ci) => (
              <td
                key={ci}
                className={`py-3 px-3 ${ci === row.length - 1 ? "text-right font-semibold whitespace-nowrap" : "text-left"}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ─── data ─── */
const businessHeaders = ["Feature", "Compliance Essentials", "Growth Advisory", "Strategic Architecture"];
const businessRows: string[][] = [
  ["Ideal For", "Stable businesses needing reliable filing", "Owners seeking proactive tax reduction", "Complex, multi-entity, scaling operators"],
  ["Business Tax Return (1120S / 1065 / 1120)", "✔ (one state)", "✔ (up to 3 states)", "✔"],
  ["Individual Return (1040, if applicable)", "✔ (one state)", "✔ (up to 3 states)", "✔"],
  ["Year-End Tax Projection", "✔ (Basic)", "✔ (Detailed)", "✔ (Multi-Scenario)"],
  ["Tax Return Review Meeting", "✔", "✔", "✔"],
  ["Email Support", "Tax Season Only", "Year-Round (Limited)", "Priority Access"],
  ["Pre-Planning Strategy Meeting (Spring)", "—", "✔", "✔"],
  ["Mid-Year Tax Projection", "—", "✔", "✔"],
  ["Year-End Planning Session", "—", "✔", "✔"],
  ["Owner Compensation Review", "—", "✔", "✔ (Advanced)"],
  ["Section 199A Optimization", "—", "✔", "✔"],
  ["PTET Evaluations & Modeling", "—", "✔", "✔"],
  ["Multi-Entity Structuring", "—", "—", "✔"],
  ["Multi-State Nexus & Apportionment", "—", "—", "✔"],
  ["Multi-Year Scenario Modeling", "—", "—", "✔"],
  ["Advisory Coordination (Attorney / Wealth / Lenders)", "—", "Add-on", "✔"],
  ["Complimentary Consults", "✔ Up to 2/year", "✔ Up to 4/year", "✔"],
  ["QuickBooks / Accounting Consulting", "Add-on", "Add-on", "✔"],
  ["Financial Statement Review", "✔", "✔", "✔"],
  ["Prepare / Revise Financial Statement", "Add-on", "Add-on", "✔"],
  ["Financial Analysis (Cash Flow, Budgeting, KPIs)", "—", "Add-on", "✔"],
  ["Estimated Investment (Fees)", "$4,300", "$5,900", "Custom, starts at $9,500"],
];

const privateHeaders = ["Feature", "Private Client Core", "Market-Active Strategic", "Advanced Wealth Advisory"];
const privateRows: string[][] = [
  ["Individual Tax Return (1040)", "✔", "✔", "✔"],
  ["Multi-state Filing", "Add-On", "✔ (up to 2 states)", "✔"],
  ["Multi-State Filing Strategy", "—", "✔", "✔"],
  ["Multiple 1099 Consolidation*", "✔", "✔", "✔"],
  ["K-1 Reporting", "✔ (up to 3)", "✔ (up to 6)", "Extensive"],
  ["Rental Properties*", "Add-On", "✔ (up to 3)", "Portfolio-level"],
  ["High-Volume Equity Trades", "✔", "✔", "✔"],
  ["Options Reporting (Equity & ETF)", "✔", "✔ (Enhanced review)", "✔ (Strategic Modeling)"],
  ["Capital Gain Volatility Planning", "—", "✔", "✔"],
  ["Quarterly Estimated Planning", "—", "✔", "✔"],
  ["Wash Sale Review", "—", "✔", "✔"],
  ["Liquidity Event Modeling", "—", "—", "✔"],
  ["Advisor Coordination", "—", "Limited", "Full"],
  ["Priority Access", "—", "✔", "✔"],
  ["Estimated Investment (Fees)", "$800", "$2,500", "Custom, starts at $5,500"],
];

/* ─── component ─── */
const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding navy-gradient">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
            Pricing
          </p>
          <h1 className="heading-display text-primary-foreground mb-6">
            Transparent Pricing. Clear Scope. No Surprises.
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-4">
            We believe you should know what you're paying for before you engage. Below are our
            standard engagement tiers and fee schedules. Every engagement begins with a
            conversation to determine the right fit.
          </p>
          <p className="text-primary-foreground/60 text-sm mb-2">
            Not sure which tier is right for you?
          </p>
          <CTA />
        </div>
      </section>

      {/* Tabs */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl">
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
              <TabsTrigger value="business" className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Business Services</TabsTrigger>
              <TabsTrigger value="private" className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Private Client</TabsTrigger>
              <TabsTrigger value="founder" className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Founder Advisory</TabsTrigger>
              <TabsTrigger value="hourly" className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none bg-transparent">Hourly &amp; Ad Hoc</TabsTrigger>
            </TabsList>

            {/* ── Business Services ── */}
            <TabsContent value="business" className="mt-0">
              <h2 className="heading-section mb-2">Business Services</h2>
              <p className="body-large mb-6">Core Engagement Levels</p>

              <Accordion type="multiple" className="space-y-3">
                <AccordionItem value="comparison" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Engagement Comparison</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ResponsiveTable headers={businessHeaders} rows={businessRows} />
                    <p className="mt-6 text-sm text-muted-foreground">
                      Not sure which level fits? Most clients start with a conversation.
                    </p>
                    <CTA />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="formation" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Business Formation</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["Articles of Incorporation / Organization / Dissolution", "$750 + state filing fee"],
                        ["Initial Report (if required)", "$125 + state filing fee"],
                        ["Annual Report", "$350 + state filing fee"],
                        ["Employer Identification Number (EIN)", "Included"],
                        ["Single Member Operations Agreement (SMLLC)", "Included"],
                        ["MS Word Templated Bylaws Agreement (Corporations)", "Included"],
                        ["S Corp Election, Timely Election (made with formation)", "Included"],
                        ["Accountable Plan", "Included"],
                        ["S Corp Election, Timely Election (within 75 days)", "$450"],
                        ["Late S Corp Election", "$600 (before December) / $1,200 (after Jan 1, 2026)"],
                        ["Additional State Returns", "$350"],
                        ["Add New State for Existing Business", "$750 + state filing fee"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="accounting" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Accounting &amp; Sales Tax</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ResponsiveTable
                      headers={["Feature", "Starter", "Growth", "Multi-Entity (Complex)"]}
                      rows={[
                        ["QuickBooks Setup Fee", "$350", "$450", "Included in quote"],
                        ["Monthly Accounting", "$375/mo (1 bank + 2 CC)", "$595/mo (2 banks + 4 CC)", "Custom"],
                        ["Annual Accounting for Tax Prep", "$2,500", "Hourly billing", "Custom"],
                        ["Sales Tax", "$75/mo/state · $150/qtr/state", "$100/mo/state · $250/qtr/state", "Custom"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payroll" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Payroll Fees</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["Payroll Accounts Setup, Transfer, Closing", "$500–$650 depending on state"],
                        ["Employee Onboarding, Offboarding & Change of State", "$250–$350 depending on state"],
                        ["Entity Relocation Package", "$800–$1,050 + state filing fee"],
                        ["Address Changes without Payroll (IRS, State, SoS)", "$250 + state filing fees"],
                        ["Address Changes with Payroll", "$350–$450 + state filing fee"],
                        ["Payroll Processing Fee", "$50/employee + ADP Platform Fee (pass-through)"],
                        ["Change Payroll Residence Status for Employee", "$175/change"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* ── Private Client ── */}
            <TabsContent value="private" className="mt-8">
              <h2 className="heading-section mb-2">Private Client Tax &amp; Advisory</h2>
              <p className="body-large mb-6">High-Income · Active Traders · Real Estate Investors</p>

              <Accordion type="multiple" className="space-y-3">
                <AccordionItem value="comparison" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Engagement Comparison</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ResponsiveTable headers={privateHeaders} rows={privateRows} />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rental" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Rental Property Module</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["Clean Books", "$250 / property"],
                        ["Structured DIY", "$350 / property"],
                        ["Complex", "$500 / property"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="k1" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">K-1s</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["1–3", "Included"],
                        ["4–6", "+$750"],
                        ["7+", "Custom"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="trading" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Trading Activity</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["1–2 brokerage accounts", "Included"],
                        ["3–5 accounts", "+$500"],
                        ["6+ accounts or reconciliation-heavy", "Starts at $1,000"],
                        ["Significant options volume (>500 contracts)", "+$750"],
                        ["Complex option strategies (spreads, straddles, iron condors)", "Starts at $1,250+"],
                        ["Crypto reporting (moderate)", "+$750"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p className="mt-6 text-sm text-muted-foreground">
                Not sure which level fits? Most clients start with a conversation.
              </p>
              <CTA />
            </TabsContent>

            {/* ── Founder Advisory ── */}
            <TabsContent value="founder" className="mt-8">
              <h2 className="heading-section mb-2">Founder &amp; Executive Advisory</h2>
              <p className="body-large mb-6">
                For growth-stage founders · Equity-heavy executives · Pre-liquidity operators
              </p>

              <Accordion type="multiple" className="space-y-3">
                <AccordionItem value="qualification" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Qualification Criteria</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      This engagement is designed for individuals whose compensation, equity structure,
                      liquidity decisions, and ownership strategy materially impact long-term wealth
                      outcomes and who meet one or more of the following:
                    </p>
                    <ul className="space-y-2 text-sm">
                      {[
                        "Household income exceeding $500K",
                        "Active equity compensation (ISOs, NSOs, RSUs)",
                        "Ownership in two or more business entities",
                        "Anticipated liquidity event within 24 months",
                        "Multi-state filing with three or more jurisdictions",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="includes" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Advisory Includes</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-2 text-sm">
                      {[
                        "Founder compensation architecture (salary vs distributions vs equity)",
                        "QSBS eligibility tracking & strategy",
                        "Equity grant and option modeling (ISO/NSO/RSU)",
                        "AMT scenario planning",
                        "Liquidity event scenario modeling (pre-liquidity & exit-year tax modeling)",
                        "Multi-year wealth roadmap (personal and business)",
                        "Cash flow and estimated tax strategy",
                        "Advisor coordination (legal, wealth, M&A)",
                        "Founder-Priority advisory access",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="mt-8 rounded-lg border border-accent/30 bg-accent/5 p-6 text-center">
                <p className="text-lg font-semibold font-serif">Engagement fee starts at $12,500</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Let's discuss whether it's the right fit.
                </p>
                <CTA label="Request a Founder Strategy Consultation" />
              </div>
            </TabsContent>


            {/* ── Hourly & Ad Hoc ── */}
            <TabsContent value="hourly" className="mt-8">
              <h2 className="heading-section mb-6">Hourly &amp; Ad Hoc</h2>

              <Accordion type="single" collapsible defaultValue="rates" className="space-y-3">
                <AccordionItem value="rates" className="border rounded-lg px-6 py-0">
                  <AccordionTrigger className="text-base font-semibold py-4">Rate Schedule</AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <SimpleTable
                      rows={[
                        ["Accounting Setup or Transfer (Fractional Controller)", "Varies"],
                        ["Significant Changes After Preliminary Return", "$250/hr"],
                        ["Tax Resolution / Audit Assistance", "$375/hr"],
                        ["Lender Letters", "$250–$600"],
                        ["Business Valuations", "$375/hr"],
                        ["Divorce or Separation Analysis", "$250/hr"],
                        ["Accountant Billable Rate", "$150/hr"],
                        ["Manager Billable Rate", "$250/hr"],
                        ["Managing Principal Billable Rate", "$450/hr"],
                      ]}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
