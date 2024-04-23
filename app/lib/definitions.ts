export type User ={
  id: string; 
  name: string;
  email: string; 
  password: string;
}; 

export type Team = {
  team: string; 
  department: string, 
}

export type Note = {
  id: string; 
  user_id: string;
  title: string; 
  team: string; 
  body: string; 
  date: string; 
  priority: string;
};

export type LatestNotes = {
  id: string; 
  name: string; 
  image_url: string; 
  email: string, 
  priority: string; 
}