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

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="w-80">
      <div
        className="p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md  transition-all duration-300 cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about Interviewing
            </DialogTitle>
            <DialogDescription asChild>
              <div>
                <p>
                  Add details about your job position/role, job description, and
                  years of experience.
                </p>
                <div className="mt-7 my-3">
                  <label htmlFor="role">Job Role/Job Position</label>
                  <Input
                    id="role"
                    placeholder="Ex. Full stack Developer"
                    required
                  />
                </div>
                <div className="my-3">
                  <label htmlFor="Description">
                    Job Description/ tech stack
                  </label>
                  <Textarea
                    id="Description"
                    placeholder="React.js, Angular, Nodejs etc."
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="exp">Years of Experince</label>
                  <Input id="exp" placeholder="Ex. 5" type="number" />
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setOpenDialog(false)}
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Start Interview</Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
