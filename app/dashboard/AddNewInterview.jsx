"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { chatSession } from "@/utils/GeminiAiModel";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";

import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";

import { useRouter } from "next/navigation";

import SpotlightCard from "@/src/blocks/TailwindComponents/SpotlightCard/SpotlightCard";

const AddNewInterview = () => {
  // console.log("use user", user?.primaryEmailAddress?.emailAddress);
  const [openDialog, setOpenDialog] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [experince, setExperince] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const [resume, setResume] = useState([]);

  const { user } = useUser();

  const router = useRouter();

  // console.log("user is ", user?.primaryEmailAddress?.emailAddress);
  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(role, description, experince);

    const InputPrompt =
      "Job Position : " +
      role +
      ", job description: " +
      description +
      ", years of experience: " +
      resume +
      "Resume" +
      experince +
      "Depend on job position and years of experience and resume, give me a 5 interview question along with answer in JSON format Give us question and answer field.";

    const result = await chatSession.sendMessage(InputPrompt);

    const mockresponse = result.response
      .text()
      .replace("```json", " ")
      .replace("```", " ");

    console.log(JSON.parse(mockresponse));
    setJsonResponse(mockresponse);
    console.log("object");
    setLoading(false);

    const resp = await db
      .insert(MockInterview)
      .values({
        mockId: uuidv4(),
        jsonMockResp: mockresponse,
        jobPosition: role,
        jobDesc: description,
        jobExperince: experince,
        resume: resume,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      })
      .returning({ mockId: MockInterview.mockId });

    console.log("Successfully inserted:", resp);
    if (resp) {
      setOpenDialog(false);
      router.push("/dashboard/interview/" + resp[0]?.mockId);
    }
  };
  return (
    <div className="w-80">
      <div
        className="p-10 border rounded-lg bg-neutral-300 hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>

      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            {/* <SpotlightCard className="z-10"> */}
            <DialogTitle className="text-2xl">
              Tell us more about Interviewing
            </DialogTitle>
            <DialogDescription asChild>
              <form action="" onSubmit={onSubmit}>
                <div className="z-20">
                  <p>
                    Add details about your job position/role, job description,
                    and years of experience.
                  </p>
                  <div className="mt-7 my-3">
                    <label htmlFor="role">Job Role/Job Position</label>
                    <Input
                      id="role"
                      placeholder="Ex. Full stack Developer"
                      onChange={(e) => {
                        setRole(e.target.value);
                      }}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="Description">
                      Job Description/ tech stack
                    </label>
                    <Textarea
                      id="Description"
                      placeholder="React.js, Angular, Nodejs etc."
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="my-3">
                    <label htmlFor="resume">Resume/cover letter</label>
                    <Textarea
                      id="resume"
                      placeholder="Copy and Paste your Resume"
                      onChange={(e) => {
                        setResume(e.target.value);
                      }}
                    />
                  </div>
                  <div className="my-2">
                    <label htmlFor="exp">Years of Experince</label>
                    <Input
                      id="exp"
                      placeholder="Ex. 5"
                      type="number"
                      onChange={(e) => {
                        setExperince(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex gap-5 justify-end">
                    <Button
                      variant="outline"
                      onClick={() => setOpenDialog(false)}
                      type="button"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? <p>Loading</p> : <p>Start Interview</p>}
                    </Button>
                  </div>
                </div>
              </form>
            </DialogDescription>
            {/* </SpotlightCard> */}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
