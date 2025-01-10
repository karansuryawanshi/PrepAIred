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

// import loading

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [experince, setExperince] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);

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
      experince +
      "Depend on job position and years of experience, give me a 5 interview question along with answer in JSON format Give us question and answer field.";

    const result = await chatSession.sendMessage(InputPrompt);

    const mockresponse = result.response
      .text()
      .replace("```json", " ")
      .replace("```", " ");

    console.log(JSON.parse(mockresponse));
    setJsonResponse(mockresponse);
    setLoading(false);
  };
  return (
    <div className="w-80">
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md  transition-all duration-300 cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about Interviewing
            </DialogTitle>
            <DialogDescription asChild>
              <form action="" onSubmit={onSubmit}>
                <div>
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
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
