class Subject < ApplicationRecord
  belongs_to :teacher

  validates :name, :description, :credits, :independent_work, :classroom_work, :program_files, :synopsis_files, :lab_files, :control_question_files, presence: true
end
