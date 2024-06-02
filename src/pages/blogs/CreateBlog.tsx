import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  title: string;
  description: string;
  image: string;
  publishedDate: string;
  publishedBy: string;
}

function CreateBlog() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    image: '',
    publishedDate: '',
    publishedBy: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleReset = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      publishedDate: '',
      publishedBy: ''
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to an API
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="create-blog">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="publishedDate">Published Date</label>
          <input
            type="date"
            name="publishedDate"
            value={formData.publishedDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="publishedBy">Published By</label>
          <input
            type="text"
            name="publishedBy"
            value={formData.publishedBy}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="reset" onClick={handleReset}>Reset</button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
