import SEO from "../core/SEO";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Signature Space Studio Interiors"
        description="Terms and Conditions of Signature Space Studio Interiors"
      />

      <section className="bg-[#f5f7fa] py-14">
        <div className="max-w-4xl mx-auto px-6">
          {/* CARD */}
          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Terms & Conditions
            </h1>
            <p className="text-gray-500 mb-8">
              Please read these terms carefully before using our services.
            </p>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing this website, you agree to be bound by the terms
                  and conditions of Signature Space Studio Interiors.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 mb-1">
                  2. Services
                </h2>
                <p>
                  All services are provided based on mutually agreed quotations,
                  timelines, and project scope.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 mb-1">
                  3. Payments
                </h2>
                <p>
                  Payments must be made as per agreed milestones. Additional
                  work beyond scope may incur extra charges.
                </p>
              </div>

              <div>
                <h2 className="font-semibold text-gray-900 mb-1">
                  4. Limitation of Liability
                </h2>
                <p>
                  We are not responsible for indirect or consequential damages
                  arising from service usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
