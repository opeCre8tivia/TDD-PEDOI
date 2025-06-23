import React from "react";
import { getUserById } from "./action";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

const UserDetail = async ({ params }: PageProps) => {
  const user = await getUserById(params.id);
  if (!user) return notFound();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-2 py-2">
      <div className="w-full h-full min-h-screen bg-white rounded-lg shadow-md p-4 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-left text-gray-500 mb-2">User Details</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">First Name</div>
            <div className="font-semibold text-lg text-gray-800">{user.firstName}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">Last Name</div>
            <div className="font-semibold text-lg text-gray-800">{user.lastName}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">Email</div>
            <div className="font-semibold text-lg text-gray-800 break-all">{user.email}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">Mobile Number</div>
            <div className="font-semibold text-lg text-gray-800">{user.mobileNumber}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">Status</div>
            <div className="font-semibold text-lg text-gray-800">{user.isActive}</div>
          </div>
          <div>
            <div className="text-gray-500 text-xs uppercase mb-1">Created At</div>
            <div className="font-semibold text-lg text-gray-800">{user.created_at ? new Date(user.created_at).toLocaleString() : "-"}</div>
          </div>
        </div>
        {/* Add more fields as needed */}
        <div className="mt-8">
  <h2 className="text-xl font-semibold text-primary mb-4">Questionaire Response</h2>
  {user.questionaire ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Roles</div>
        <div className="font-medium text-gray-800">{user.questionaire.roles?.join(", ") || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Initiatives</div>
        <div className="font-medium text-gray-800">{user.questionaire.initiatives?.join(", ") || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Resources</div>
        <div className="font-medium text-gray-800">{user.questionaire.resources?.join(", ") || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Number of Gardens</div>
        <div className="font-medium text-gray-800">{user.questionaire.numberOfGardens ?? "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">District</div>
        <div className="font-medium text-gray-800">{user.questionaire.district || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">County</div>
        <div className="font-medium text-gray-800">{user.questionaire.county || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Sub County</div>
        <div className="font-medium text-gray-800">{user.questionaire.subCounty || "-"}</div>
      </div>
      <div>
        <div className="text-gray-500 text-xs uppercase mb-1">Zone</div>
        <div className="font-medium text-gray-800">{user.questionaire.zone || "-"}</div>
      </div>
      <div className="md:col-span-2">
        <div className="text-gray-500 text-xs uppercase mb-1">About Membership</div>
        <div className="font-medium text-gray-800">{user.questionaire.aboutMembership || "-"}</div>
      </div>
    </div>
  ) : (
    <div className="text-gray-500 text-center">No questionaire response found for this user.</div>
  )}
</div>
      </div>

    </div>
  );
};

export default UserDetail;
