# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_05_12_215553) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "education_programs", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "science_works", force: :cascade do |t|
    t.string "photo"
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "specialties", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.float "credits"
    t.float "independent_work"
    t.float "classroom_work"
    t.string "program_files"
    t.string "synopsis_files"
    t.string "lab_files"
    t.string "control_question_files"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "lastname"
    t.string "patronymic"
    t.string "photo"
    t.string "position"
    t.string "rank"
    t.string "degree"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
