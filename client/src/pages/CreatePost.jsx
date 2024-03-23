import { Button, FileInput, Select, TextInput, Textarea } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 fonst-semibold ">
        Create a post
      </h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <Select>
            <option value="uncategorized">Select Category</option>
            <option value="React">React</option>
            <option value="Nodejs">Nodejs</option>
            <option value="Javascript">Javascript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
            <option value="C++">C++</option>
            <option value="C#">C#</option>
          </Select>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput typeof="file" accept="image/*" />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
          >
            Upload Image
          </Button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write Something"
          className="h-72 mb-12"
          required
        />
        <Button type="submit" gradientDuoTone="purpleToPink" outline>
          Publish
        </Button>
      </form>
    </div>
  );
}
