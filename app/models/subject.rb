class Subject < ApplicationRecord
  belongs_to :teacher

  mount_uploader :program_files, ImageUploader
  mount_uploader :synopsis_files, ImageUploader
  mount_uploader :lab_files, ImageUploader
  mount_uploader :control_question_files, ImageUploader

  validates :name, :description, :credits, :independent_work, :classroom_work, :program_files, :synopsis_files, :lab_files, :control_question_files, presence: true
end
