
// import type { Metadata } from "next"
// import Link from "next/link"
// import Image from "next/image"

// export const metadata: Metadata = {
//   title: "Tax Invoice | OfferBeez",
//   description: "Tax invoice for business user billing",
// }

// export default function TaxInvoice() {
//   return (
//     <main className="bg-white min-h-screen">
//       <div className="border-b border-gray-200">
//         <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-3">
//           <div className="flex items-center gap-3">
//             {/* OfferBeez Logo */}
//             <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-sm">OB</span>
//             </div>
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Tax Invoice</h1>
//               <p className="text-sm text-gray-500">
//                 Business user billing invoice
//               </p>
//             </div>
//           </div>
//           <div className="hidden sm:flex">
//             <Link
//               href="/"
//               className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
//             >
//               Back to Home
//             </Link>
//           </div>
//         </div>
//       </div>

//       <section className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-sm">
//           {/* Invoice Header with Logo */}
//           <div className="p-6 border-b border-gray-300">
//             <div className="flex justify-between items-start mb-4">
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-900 mb-2">Tax Invoice</h1>
//                 {/* OfferBeez Logo in Header */}
//                 <div className="flex items-center gap-2 mb-3">
//                   <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center">
//                     <span className="text-white font-bold text-xs">OB</span>
//                   </div>
//                   <span className="text-sm font-semibold text-gray-700">OfferBeez</span>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
//                   <span className="text-white font-bold text-lg">OB</span>
//                 </div>
//                 <p className="text-xs text-gray-500">Official Invoice</p>
//               </div>
//             </div>
            
//             <div className="mb-4">
//               <h2 className="text-lg font-semibold text-gray-900 mb-2">VentureBiz Promotions Private Limited</h2>
//               <p className="text-sm text-gray-700">#2085/16, 2nd Floor, Spoorthi, Wilson Garden Society Layout,</p>
//               <p className="text-sm text-gray-700">Puttenahalli Main Road, JP Nagar 7th Phase,</p>
//               <p className="text-sm text-gray-700">Bangalore - 560078.</p>
//             </div>

//             <div className="text-sm text-gray-700">
//               <p>Phone no.: +91 9008522366 Email: info@venturebiz.in / support@offerbeez.com</p>
//               <p>GSTIN: 29AAKCV7929E1ZR, State: 29-Karnataka</p>
//             </div>
//           </div>

//           {/* Bill To Section */}
//           <div className="p-6 border-b border-gray-300">
//             <h3 className="text-md font-semibold text-gray-900 mb-3">Bill To:</h3>
//             <div className="mb-2">
//               <strong className="text-gray-900">CETRAL AYURVEDA RESEARCH INSTITUTE</strong>
//             </div>
//             <p className="text-sm text-gray-700">#12, Uttarahalli Manavarthe Kaval, Kanakapura main road, Thalaghattapura post,</p>
//             <p className="text-sm text-gray-700">Bengaluru - 560 109</p>
//             <p className="text-sm text-gray-700">GSTIN :</p>
//           </div>

//           {/* Items Table */}
//           <div className="p-6 border-b border-gray-300">
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300 text-sm">
//                 <thead>
//                   <tr>
//                     <th className="border border-gray-300 p-2 text-left font-semibold" colSpan={2}>
//                       Contact No.: 9916995959
//                     </th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold">Quantity</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold">Price/ Unit</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold">GST</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold">Amount</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center font-semibold" style={{width: '5%'}}>#</td>
//                     <td className="border border-gray-300 p-2 text-left font-semibold" style={{width: '45%'}}>space</td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center">1</td>
//                     <td className="border border-gray-300 p-2 text-left">
//                       Offerbeez(Yearly membership)
//                     </td>
//                     <td className="border border-gray-300 p-2 text-center">1</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 4,237.29</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 762.71 (18%)</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-left text-xs">
//                       VVP\01MEMBERID0123 (Offerbeez-Paid-Annual-Membership- Digital)
//                     </td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-left font-semibold">Total</td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center font-semibold">₹ 762.71</td>
//                     <td className="border border-gray-300 p-2 text-center font-semibold">₹ 5,000.00</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Tax Breakdown */}
//           <div className="p-6 border-b border-gray-300">
//             <h3 className="text-md font-semibold text-gray-900 mb-3">Tax type</h3>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse border border-gray-300 text-sm">
//                 <thead>
//                   <tr>
//                     <th className="border border-gray-300 p-2 text-center font-semibold" style={{width: '15%'}}></th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold" style={{width: '25%'}}>Taxable amount</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold" style={{width: '15%'}}>Rate</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold" style={{width: '25%'}}>Tax amount</th>
//                     <th className="border border-gray-300 p-2 text-center font-semibold" style={{width: '20%'}}>Amounts:</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center">$381.36</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 4,237.29</td>
//                     <td className="border border-gray-300 p-2 text-center">9%</td>
//                     <td className="border border-gray-300 p-2 text-center">Sub Total</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center">$381.36</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 4,237.29</td>
//                     <td className="border border-gray-300 p-2 text-center">9%</td>
//                     <td className="border border-gray-300 p-2 text-center">Total</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center">Received</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                   <tr>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center"></td>
//                     <td className="border border-gray-300 p-2 text-center">Balance</td>
//                     <td className="border border-gray-300 p-2 text-center">₹ 5,000.00</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Amount in Words */}
//           <div className="p-6 border-b border-gray-300">
//             <h3 className="text-md font-semibold text-gray-900 mb-2">Invoice Amount In Words</h3>
//             <p className="text-sm text-gray-700">Five Thousand Rupees only</p>
//           </div>

//           {/* Terms and Conditions */}
//           <div className="p-6 border-b border-gray-300">
//             <h3 className="text-md font-semibold text-gray-900 mb-3">Terms and conditions:</h3>
//             <div className="text-sm text-gray-700 space-y-1">
//               <p>1. The Offerbeez Business Onboarding subscription is valid for one (1) year from the date of Payment.</p>
//               <p>2. The subscription amount mentioned in the invoice is non-refundable once payment is processed.</p>
//               <p>3. All payments must be made in full before activation of the subscription.</p>
//               <p>4. The subscription cannot be transferred or shared with another business entity.</p>
//               <p>5. Any misuse of the platform, misleading advertisements, or fraudulent activities may result in suspension of the account without refund.</p>
//             </div>
//           </div>

//           {/* Footer Note with Logo */}
//           <div className="p-6 bg-gray-50">
//             <div className="flex justify-between items-center">
//               <p className="text-sm text-gray-600 italic">
//                 Note: This is an electronically generated invoice. No signature or seal is required.
//               </p>
//               <div className="flex items-center gap-2">
//                 <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-600 rounded flex items-center justify-center">
//                   <span className="text-white font-bold text-xs">OB</span>
//                 </div>
//                 <span className="text-xs font-semibold text-gray-700">OfferBeez</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="max-w-4xl mx-auto mt-6 text-center">
//           <div className="text-xs text-gray-500">
//             If you have questions about this invoice, contact us at{" "}
//             <a href="mailto:support@offerbeez.in" className="text-pink-600 hover:underline">
//               support@offerbeez.in
//             </a>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }
//////////////////////////////////////////////////////////////////////////////////////////
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business User Billing | OfferBeez",
  description:
    "OfferBeez Business User Billing terms and conditions. These terms govern billing and payment processes for business users. Please read them carefully.",
  robots: "index, follow",
  alternates: { canonical: "/business-user-billing" },
  openGraph: {
    title: "Business User Billing | OfferBeez",
    description:
      "OfferBeez Business User Billing terms and conditions. These terms govern billing and payment processes for business users. Please read them carefully.",
    url: "https://offerbeez.com/business-user-billing",
    siteName: "OfferBeez",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Business User Billing | OfferBeez",
    description:
      "OfferBeez Business User Billing terms and conditions. These terms govern billing and payment processes for business users. Please read them carefully.",
  },
}

const DOC_ID = "17Jb5Bx0pVYSwZ9X4c4FCkYdP8BZSYzOO"
const GOOGLE_PREVIEW_URL = `https://docs.google.com/document/d/${DOC_ID}/preview`

export default function BusinessUserBilling() {
  return (
    <main className="min-h-screen bg-transparent">
      <div className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Business User Billing</h1>
            <p className="text-sm text-gray-500">
              These terms govern billing and payment processes for business users. Please read them carefully.
            </p>
          </div>

          <div className="hidden sm:flex">
            <Link
              href="/"
              className="inline-flex items-center rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-10">
        <div className="w-full border rounded-xl shadow-sm overflow-hidden bg-white">
          
          {/* ✅ No scrollbar + transparent background */}
          <iframe
            src={GOOGLE_PREVIEW_URL}
            className="w-full h-[90vh] border-0"
            style={{
              background: "transparent",
              overflow: "hidden",
            }}
            scrolling="no"
          />
        </div>

        <div className="mt-6 text-xs text-gray-500">
          If you have questions about these terms, contact us at{" "}
          <a href="mailto:support@offerbeez.com" className="text-pink-600 hover:underline">
            support@offerbeez.in
          </a>
          .
        </div>
      </section>

      <style>{`
        /* Hide page scrollbar */
        body::-webkit-scrollbar {
          display: none;
        }
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* Hide iframe internal scrollbar */
        iframe::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
