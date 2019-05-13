class ScienceWork < ApplicationRecord
  validates :photo, :name, :description, presence: true
end
