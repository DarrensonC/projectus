import Logo from "@/components/logo";

export default async function Page() {
  return (
    <div className="flex flex-auto flex-col font-medium gap-6">
      <div className="bg-green-600 text-white">
        <div className="mx-auto px-4 sm:px-6 py-4 space-y-4 font-medium">
          <div className="text-sm text-center font-semibold">
            Your purchase has been completed successfully!
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto p-4 space-y-2 font-medium">
        <div className="flex flex-col text-base rounded-2xl gap-5 bg-gradient-to-t appear px-4 py-6 from-gray-50 to-gray-100">
          <span className="text-2xl font-semibold text-center">🎁 Welcome! 🎁</span>

          <p><strong>Your access is being delivered by email.</strong></p>
          <p>The next step is to check the inbox of the email used for the purchase (also check Spam/Junk).</p>

          <p>
            You will receive an email with the title:<br /><strong>“Your access has arrived! 🥰”</strong>.
          </p>

          <div className="rounded-2xl border-2 border-dashed text-sm mt-2 p-5 bg-yellow-50 border-yellow-400">
            <p><strong>Important:</strong> this email contains a secure magic link (valid for 24 hours).</p>
            <p>After your first access, go to <strong>My Account</strong> to create your password.</p>
          </div>

          <div className="rounded-2xl border-2 border-dashed text-sm mt-2 p-5 bg-green-50 border-green-500">
            <p><strong>Didn’t receive it?</strong></p>
            <p>Please wait a few minutes and check Spam/Promotions.</p>
            <p>If you still can’t find it, contact us at <strong>support@usetaskora.com</strong>.</p>
          </div>
        </div>

        <div className="flex justify-center !my-10">
          <Logo />
        </div>

      </div>
    </div>  
  );

};