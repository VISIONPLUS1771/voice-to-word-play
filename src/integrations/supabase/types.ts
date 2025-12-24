export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      actions: {
        Row: {
          created_at: string
          due_date: string | null
          friction_score: number | null
          id: string
          status: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          due_date?: string | null
          friction_score?: number | null
          id?: string
          status?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          due_date?: string | null
          friction_score?: number | null
          id?: string
          status?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      ai_advisor_logs: {
        Row: {
          context_data: Json | null
          created_at: string
          id: string
          query_text: string
          response_text: string
          session_id: string | null
          user_id: string
        }
        Insert: {
          context_data?: Json | null
          created_at?: string
          id?: string
          query_text: string
          response_text: string
          session_id?: string | null
          user_id: string
        }
        Update: {
          context_data?: Json | null
          created_at?: string
          id?: string
          query_text?: string
          response_text?: string
          session_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      ai_content_history: {
        Row: {
          created_at: string
          generated_content: Json
          id: string
          selected_content: string | null
          topic: string
          used: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string
          generated_content: Json
          id?: string
          selected_content?: string | null
          topic: string
          used?: boolean | null
          user_id: string
        }
        Update: {
          created_at?: string
          generated_content?: Json
          id?: string
          selected_content?: string | null
          topic?: string
          used?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      ai_idempotency: {
        Row: {
          created_at: string
          key: string
          result: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          key: string
          result: Json
          user_id: string
        }
        Update: {
          created_at?: string
          key?: string
          result?: Json
          user_id?: string
        }
        Relationships: []
      }
      ai_interactions: {
        Row: {
          action: string
          created_at: string | null
          duration_ms: number | null
          id: string
          input_text: string | null
          map_id: string | null
          node_id: string | null
          output_data: Json | null
          tokens_used: number | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          input_text?: string | null
          map_id?: string | null
          node_id?: string | null
          output_data?: Json | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          duration_ms?: number | null
          id?: string
          input_text?: string | null
          map_id?: string | null
          node_id?: string | null
          output_data?: Json | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_interactions_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_interactions_node_id_fkey"
            columns: ["node_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_playbooks: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          duration_days: number
          goal: string | null
          id: string
          name: string
          platforms: string[]
          posts_per_week: number
          target_audience: string | null
          template_ids: string[] | null
          updated_at: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_days?: number
          goal?: string | null
          id?: string
          name: string
          platforms?: string[]
          posts_per_week?: number
          target_audience?: string | null
          template_ids?: string[] | null
          updated_at?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          duration_days?: number
          goal?: string | null
          id?: string
          name?: string
          platforms?: string[]
          posts_per_week?: number
          target_audience?: string | null
          template_ids?: string[] | null
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_playbooks_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      allergens: {
        Row: {
          code: string
          icon: string | null
          id: number
          label_en: string
          label_hr: string
        }
        Insert: {
          code: string
          icon?: string | null
          id: number
          label_en: string
          label_hr: string
        }
        Update: {
          code?: string
          icon?: string | null
          id?: number
          label_en?: string
          label_hr?: string
        }
        Relationships: []
      }
      alternatives: {
        Row: {
          cons: string[] | null
          created_at: string
          decision_id: string
          description: string | null
          id: string
          name: string
          pros: string[] | null
        }
        Insert: {
          cons?: string[] | null
          created_at?: string
          decision_id: string
          description?: string | null
          id?: string
          name: string
          pros?: string[] | null
        }
        Update: {
          cons?: string[] | null
          created_at?: string
          decision_id?: string
          description?: string | null
          id?: string
          name?: string
          pros?: string[] | null
        }
        Relationships: []
      }
      analyses: {
        Row: {
          a_birth_date: string
          a_birth_place: string | null
          a_birth_time: string | null
          a_expression: number | null
          a_full_name: string
          a_life_path: number | null
          a_personality: number | null
          a_pronouns: string | null
          a_soul_urge: number | null
          analysis_data: Json | null
          b_birth_date: string
          b_birth_place: string | null
          b_birth_time: string | null
          b_expression: number | null
          b_full_name: string
          b_life_path: number | null
          b_personality: number | null
          b_pronouns: string | null
          b_soul_urge: number | null
          compatibility_score: number | null
          couple_number: number | null
          created_at: string
          current_theme: string | null
          email: string
          free_challenge: string | null
          free_communication: string | null
          free_ritual: string | null
          free_strength: string | null
          free_summary: string | null
          id: string
          recommended_alternative_id: string | null
          relationship_status: string | null
          report_language: string
          score_overall: number | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          a_birth_date: string
          a_birth_place?: string | null
          a_birth_time?: string | null
          a_expression?: number | null
          a_full_name: string
          a_life_path?: number | null
          a_personality?: number | null
          a_pronouns?: string | null
          a_soul_urge?: number | null
          analysis_data?: Json | null
          b_birth_date: string
          b_birth_place?: string | null
          b_birth_time?: string | null
          b_expression?: number | null
          b_full_name: string
          b_life_path?: number | null
          b_personality?: number | null
          b_pronouns?: string | null
          b_soul_urge?: number | null
          compatibility_score?: number | null
          couple_number?: number | null
          created_at?: string
          current_theme?: string | null
          email: string
          free_challenge?: string | null
          free_communication?: string | null
          free_ritual?: string | null
          free_strength?: string | null
          free_summary?: string | null
          id?: string
          recommended_alternative_id?: string | null
          relationship_status?: string | null
          report_language?: string
          score_overall?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          a_birth_date?: string
          a_birth_place?: string | null
          a_birth_time?: string | null
          a_expression?: number | null
          a_full_name?: string
          a_life_path?: number | null
          a_personality?: number | null
          a_pronouns?: string | null
          a_soul_urge?: number | null
          analysis_data?: Json | null
          b_birth_date?: string
          b_birth_place?: string | null
          b_birth_time?: string | null
          b_expression?: number | null
          b_full_name?: string
          b_life_path?: number | null
          b_personality?: number | null
          b_pronouns?: string | null
          b_soul_urge?: number | null
          compatibility_score?: number | null
          couple_number?: number | null
          created_at?: string
          current_theme?: string | null
          email?: string
          free_challenge?: string | null
          free_communication?: string | null
          free_ritual?: string | null
          free_strength?: string | null
          free_summary?: string | null
          id?: string
          recommended_alternative_id?: string | null
          relationship_status?: string | null
          report_language?: string
          score_overall?: number | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      analytics_daily: {
        Row: {
          channel_id: string
          clicks: number | null
          comments: number | null
          date: string
          followers: number | null
          impressions: number | null
          likes: number | null
          revenue: number | null
          sentiment: number | null
          shares: number | null
          spend: number | null
          workspace_id: string
        }
        Insert: {
          channel_id: string
          clicks?: number | null
          comments?: number | null
          date: string
          followers?: number | null
          impressions?: number | null
          likes?: number | null
          revenue?: number | null
          sentiment?: number | null
          shares?: number | null
          spend?: number | null
          workspace_id: string
        }
        Update: {
          channel_id?: string
          clicks?: number | null
          comments?: number | null
          date?: string
          followers?: number | null
          impressions?: number | null
          likes?: number | null
          revenue?: number | null
          sentiment?: number | null
          shares?: number | null
          spend?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_daily_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_events: {
        Row: {
          event: string
          id: number
          meta: Json | null
          occurred_at: string
          user_id: string | null
        }
        Insert: {
          event: string
          id?: number
          meta?: Json | null
          occurred_at?: string
          user_id?: string | null
        }
        Update: {
          event?: string
          id?: number
          meta?: Json | null
          occurred_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      analytics_saved_views: {
        Row: {
          chart_config: Json | null
          created_at: string
          filters: Json
          id: string
          is_default: boolean
          name: string
          updated_at: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          chart_config?: Json | null
          created_at?: string
          filters?: Json
          id?: string
          is_default?: boolean
          name: string
          updated_at?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          chart_config?: Json | null
          created_at?: string
          filters?: Json
          id?: string
          is_default?: boolean
          name?: string
          updated_at?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analytics_saved_views_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      angel_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          response: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          response: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          response?: string
          user_id?: string
        }
        Relationships: []
      }
      angel_rituals: {
        Row: {
          completed_at: string
          id: string
          mood_after: number | null
          mood_before: number | null
          notes: string | null
          ritual_type: string
          user_id: string
        }
        Insert: {
          completed_at?: string
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          ritual_type: string
          user_id: string
        }
        Update: {
          completed_at?: string
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          ritual_type?: string
          user_id?: string
        }
        Relationships: []
      }
      app_idea_analyses: {
        Row: {
          ai_analysis_completed: boolean
          analysis_text: string | null
          assumptions: Json | null
          business_model: string
          competition_score: number | null
          confidence_score: number | null
          contact_email: string
          created_at: string
          est_mrr_high: number | null
          est_mrr_low: number | null
          execution_difficulty: number | null
          growth_strategy: Json | null
          id: string
          idea_description: string
          idea_text: string | null
          idea_title: string
          language: string
          market_analysis: Json | null
          market_size_score: number | null
          mrr_high: number | null
          mrr_low: number | null
          mrr_timeseries: Json | null
          mvp_plan: Json | null
          pdf_generated: boolean
          pdf_url: string | null
          potential_mrr: number | null
          public_slug: string | null
          request_count: number | null
          request_ip: string | null
          revenue_projections: Json | null
          scenarios: Json | null
          source_url: string | null
          status: string
          target_customers: Json | null
          target_market: string
          updated_at: string
          usp_analysis: Json | null
          version: number | null
          view_token: string | null
          wants_development: boolean
        }
        Insert: {
          ai_analysis_completed?: boolean
          analysis_text?: string | null
          assumptions?: Json | null
          business_model: string
          competition_score?: number | null
          confidence_score?: number | null
          contact_email: string
          created_at?: string
          est_mrr_high?: number | null
          est_mrr_low?: number | null
          execution_difficulty?: number | null
          growth_strategy?: Json | null
          id?: string
          idea_description: string
          idea_text?: string | null
          idea_title: string
          language?: string
          market_analysis?: Json | null
          market_size_score?: number | null
          mrr_high?: number | null
          mrr_low?: number | null
          mrr_timeseries?: Json | null
          mvp_plan?: Json | null
          pdf_generated?: boolean
          pdf_url?: string | null
          potential_mrr?: number | null
          public_slug?: string | null
          request_count?: number | null
          request_ip?: string | null
          revenue_projections?: Json | null
          scenarios?: Json | null
          source_url?: string | null
          status?: string
          target_customers?: Json | null
          target_market: string
          updated_at?: string
          usp_analysis?: Json | null
          version?: number | null
          view_token?: string | null
          wants_development?: boolean
        }
        Update: {
          ai_analysis_completed?: boolean
          analysis_text?: string | null
          assumptions?: Json | null
          business_model?: string
          competition_score?: number | null
          confidence_score?: number | null
          contact_email?: string
          created_at?: string
          est_mrr_high?: number | null
          est_mrr_low?: number | null
          execution_difficulty?: number | null
          growth_strategy?: Json | null
          id?: string
          idea_description?: string
          idea_text?: string | null
          idea_title?: string
          language?: string
          market_analysis?: Json | null
          market_size_score?: number | null
          mrr_high?: number | null
          mrr_low?: number | null
          mrr_timeseries?: Json | null
          mvp_plan?: Json | null
          pdf_generated?: boolean
          pdf_url?: string | null
          potential_mrr?: number | null
          public_slug?: string | null
          request_count?: number | null
          request_ip?: string | null
          revenue_projections?: Json | null
          scenarios?: Json | null
          source_url?: string | null
          status?: string
          target_customers?: Json | null
          target_market?: string
          updated_at?: string
          usp_analysis?: Json | null
          version?: number | null
          view_token?: string | null
          wants_development?: boolean
        }
        Relationships: []
      }
      appointments: {
        Row: {
          created_at: string | null
          end_at: string
          id: string
          job_id: string
          location: string | null
          notes: string | null
          provider_tenant: string
          start_at: string
          status: Database["public"]["Enums"]["appointment_status"] | null
        }
        Insert: {
          created_at?: string | null
          end_at: string
          id?: string
          job_id: string
          location?: string | null
          notes?: string | null
          provider_tenant: string
          start_at: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
        }
        Update: {
          created_at?: string | null
          end_at?: string
          id?: string
          job_id?: string
          location?: string | null
          notes?: string | null
          provider_tenant?: string
          start_at?: string
          status?: Database["public"]["Enums"]["appointment_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "appointments_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_provider_tenant_fkey"
            columns: ["provider_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      approvals: {
        Row: {
          created_at: string
          decided_at: string | null
          decided_by: string | null
          id: string
          notes: string | null
          post_id: string
          requested_by: string | null
          status: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          id?: string
          notes?: string | null
          post_id: string
          requested_by?: string | null
          status?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          decided_at?: string | null
          decided_by?: string | null
          id?: string
          notes?: string | null
          post_id?: string
          requested_by?: string | null
          status?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "approvals_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "approvals_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      assessments: {
        Row: {
          created_at: string | null
          id: string
          intake: Json
          result_en: Json | null
          result_hr: Json | null
          status: string
          tags: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          intake: Json
          result_en?: Json | null
          result_hr?: Json | null
          status?: string
          tags?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          intake?: Json
          result_en?: Json | null
          result_hr?: Json | null
          status?: string
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      assets: {
        Row: {
          created_at: string | null
          id: string
          kind: string
          meta: Json | null
          url: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          kind: string
          meta?: Json | null
          url: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          kind?: string
          meta?: Json | null
          url?: string
          workspace_id?: string
        }
        Relationships: []
      }
      astro_calcs: {
        Row: {
          analysis_id: string
          calc_type: string
          created_at: string
          data: Json
          id: string
        }
        Insert: {
          analysis_id: string
          calc_type: string
          created_at?: string
          data: Json
          id?: string
        }
        Update: {
          analysis_id?: string
          calc_type?: string
          created_at?: string
          data?: Json
          id?: string
        }
        Relationships: []
      }
      attachments: {
        Row: {
          file_url: string | null
          id: string
          map_id: string
          meta: Json | null
          mime: string | null
          node_id: string | null
        }
        Insert: {
          file_url?: string | null
          id?: string
          map_id: string
          meta?: Json | null
          mime?: string | null
          node_id?: string | null
        }
        Update: {
          file_url?: string | null
          id?: string
          map_id?: string
          meta?: Json | null
          mime?: string | null
          node_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "attachments_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attachments_node_id_fkey"
            columns: ["node_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          payload: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          payload?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          payload?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          actor: string | null
          created_at: string | null
          entity: string | null
          entity_id: string | null
          id: number
          tenant_id: string | null
        }
        Insert: {
          action: string
          actor?: string | null
          created_at?: string | null
          entity?: string | null
          entity_id?: string | null
          id?: number
          tenant_id?: string | null
        }
        Update: {
          action?: string
          actor?: string | null
          created_at?: string | null
          entity?: string | null
          entity_id?: string | null
          id?: number
          tenant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_logs_v2: {
        Row: {
          action: string
          actor: string | null
          created_at: string
          entity: string | null
          entity_id: string | null
          id: string
          meta: Json | null
          workspace_id: string
        }
        Insert: {
          action: string
          actor?: string | null
          created_at?: string
          entity?: string | null
          entity_id?: string | null
          id?: string
          meta?: Json | null
          workspace_id: string
        }
        Update: {
          action?: string
          actor?: string | null
          created_at?: string
          entity?: string | null
          entity_id?: string | null
          id?: string
          meta?: Json | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_logs_v2_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_trail: {
        Row: {
          action: string
          created_at: string
          entity_id: string | null
          entity_type: string | null
          id: string
          ip_address: string | null
          metadata: Json | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          action: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          action?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      belief_releases: {
        Row: {
          created_at: string
          desired_experience: string | null
          evidence_against: string | null
          evidence_for: string | null
          id: string
          is_true: string | null
          new_statement: string | null
          old_belief: string
          user_id: string
        }
        Insert: {
          created_at?: string
          desired_experience?: string | null
          evidence_against?: string | null
          evidence_for?: string | null
          id?: string
          is_true?: string | null
          new_statement?: string | null
          old_belief: string
          user_id: string
        }
        Update: {
          created_at?: string
          desired_experience?: string | null
          evidence_against?: string | null
          evidence_for?: string | null
          id?: string
          is_true?: string | null
          new_statement?: string | null
          old_belief?: string
          user_id?: string
        }
        Relationships: []
      }
      bids: {
        Row: {
          created_at: string | null
          deadline: string | null
          exclude: Json | null
          hours_est: number | null
          id: string
          include: Json | null
          job_id: string
          message: string | null
          price_hour: number | null
          price_total: number | null
          provider_tenant: string
          status: Database["public"]["Enums"]["bid_status"] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deadline?: string | null
          exclude?: Json | null
          hours_est?: number | null
          id?: string
          include?: Json | null
          job_id: string
          message?: string | null
          price_hour?: number | null
          price_total?: number | null
          provider_tenant: string
          status?: Database["public"]["Enums"]["bid_status"] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deadline?: string | null
          exclude?: Json | null
          hours_est?: number | null
          id?: string
          include?: Json | null
          job_id?: string
          message?: string | null
          price_hour?: number | null
          price_total?: number | null
          provider_tenant?: string
          status?: Database["public"]["Enums"]["bid_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bids_provider_tenant_fkey"
            columns: ["provider_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_invoices: {
        Row: {
          amount_total: number
          created_at: string
          id: string
          meta: Json | null
          period_end: string | null
          period_start: string | null
          status: string
          stripe_invoice_id: string | null
          workspace_id: string
        }
        Insert: {
          amount_total?: number
          created_at?: string
          id?: string
          meta?: Json | null
          period_end?: string | null
          period_start?: string | null
          status: string
          stripe_invoice_id?: string | null
          workspace_id: string
        }
        Update: {
          amount_total?: number
          created_at?: string
          id?: string
          meta?: Json | null
          period_end?: string | null
          period_start?: string | null
          status?: string
          stripe_invoice_id?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_invoices_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_ledger: {
        Row: {
          created_at: string
          id: string
          meta: Json | null
          occurred_at: string
          qty: number
          type: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          meta?: Json | null
          occurred_at?: string
          qty?: number
          type: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          id?: string
          meta?: Json | null
          occurred_at?: string
          qty?: number
          type?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_ledger_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      billing_plans: {
        Row: {
          id: string
          limits: Json
          name: string
          price_month: number
          price_year: number
        }
        Insert: {
          id: string
          limits: Json
          name: string
          price_month: number
          price_year: number
        }
        Update: {
          id?: string
          limits?: Json
          name?: string
          price_month?: number
          price_year?: number
        }
        Relationships: []
      }
      blueprints: {
        Row: {
          created_at: string | null
          data: Json
          id: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data?: Json
          id?: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json
          id?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      brand_assets: {
        Row: {
          category: string
          created_at: string | null
          file_path: string
          file_size: number
          file_type: string
          id: string
          meta: Json | null
          mime_type: string
          name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string | null
          file_path: string
          file_size: number
          file_type: string
          id?: string
          meta?: Json | null
          mime_type: string
          name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string | null
          file_path?: string
          file_size?: number
          file_type?: string
          id?: string
          meta?: Json | null
          mime_type?: string
          name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      brand_identity: {
        Row: {
          brand_personality: string[] | null
          completed_at: string | null
          created_at: string
          id: string
          mission: string | null
          target_audience: string | null
          unique_value_proposition: string | null
          updated_at: string
          user_id: string
          values: string[] | null
          vision: string | null
        }
        Insert: {
          brand_personality?: string[] | null
          completed_at?: string | null
          created_at?: string
          id?: string
          mission?: string | null
          target_audience?: string | null
          unique_value_proposition?: string | null
          updated_at?: string
          user_id: string
          values?: string[] | null
          vision?: string | null
        }
        Update: {
          brand_personality?: string[] | null
          completed_at?: string | null
          created_at?: string
          id?: string
          mission?: string | null
          target_audience?: string | null
          unique_value_proposition?: string | null
          updated_at?: string
          user_id?: string
          values?: string[] | null
          vision?: string | null
        }
        Relationships: []
      }
      brand_progress: {
        Row: {
          content_pct: number | null
          identity_pct: number | null
          presence_pct: number | null
          story_pct: number | null
          updated_at: string | null
          user_id: string
          visual_pct: number | null
        }
        Insert: {
          content_pct?: number | null
          identity_pct?: number | null
          presence_pct?: number | null
          story_pct?: number | null
          updated_at?: string | null
          user_id: string
          visual_pct?: number | null
        }
        Update: {
          content_pct?: number | null
          identity_pct?: number | null
          presence_pct?: number | null
          story_pct?: number | null
          updated_at?: string | null
          user_id?: string
          visual_pct?: number | null
        }
        Relationships: []
      }
      brand_projects: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string
          pdf_url: string | null
          status: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          pdf_url?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          pdf_url?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      brand_story: {
        Row: {
          achievements: string | null
          brand_origin: string | null
          completed_at: string | null
          created_at: string
          future_vision: string | null
          id: string
          key_challenges: string | null
          personal_journey: string | null
          turning_points: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          achievements?: string | null
          brand_origin?: string | null
          completed_at?: string | null
          created_at?: string
          future_vision?: string | null
          id?: string
          key_challenges?: string | null
          personal_journey?: string | null
          turning_points?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          achievements?: string | null
          brand_origin?: string | null
          completed_at?: string | null
          created_at?: string
          future_vision?: string | null
          id?: string
          key_challenges?: string | null
          personal_journey?: string | null
          turning_points?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      brand_voices: {
        Row: {
          created_at: string | null
          id: string
          meta: Json | null
          name: string
          vector: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          meta?: Json | null
          name: string
          vector: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          meta?: Json | null
          name?: string
          vector?: string
          workspace_id?: string
        }
        Relationships: []
      }
      breath_sessions: {
        Row: {
          created_at: string
          duration_seconds: number
          id: string
          mood_after: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_seconds: number
          id?: string
          mood_after?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          duration_seconds?: number
          id?: string
          mood_after?: number | null
          user_id?: string
        }
        Relationships: []
      }
      bss_ai_results: {
        Row: {
          completion_tokens: number | null
          created_at: string | null
          duration_ms: number | null
          error_message: string | null
          id: string
          input_hash: string
          language: string | null
          model: string
          prompt_tokens: number | null
          response_json: Json | null
          status: string
          submission_id: string | null
        }
        Insert: {
          completion_tokens?: number | null
          created_at?: string | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          input_hash: string
          language?: string | null
          model: string
          prompt_tokens?: number | null
          response_json?: Json | null
          status: string
          submission_id?: string | null
        }
        Update: {
          completion_tokens?: number | null
          created_at?: string | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          input_hash?: string
          language?: string | null
          model?: string
          prompt_tokens?: number | null
          response_json?: Json | null
          status?: string
          submission_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bss_ai_results_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "bss_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      bss_analytics_events: {
        Row: {
          ab_variant: string | null
          created_at: string | null
          event_type: string
          id: string
          ip_address: string | null
          metadata: Json | null
          page_path: string | null
          session_id: string
          user_agent: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          ab_variant?: string | null
          created_at?: string | null
          event_type: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          page_path?: string | null
          session_id: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          ab_variant?: string | null
          created_at?: string | null
          event_type?: string
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          page_path?: string | null
          session_id?: string
          user_agent?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      bss_pdf_sends: {
        Row: {
          created_at: string | null
          email: string
          id: string
          pdf_sent: boolean | null
          resend_id: string | null
          submission_id: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          pdf_sent?: boolean | null
          resend_id?: string | null
          submission_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          pdf_sent?: boolean | null
          resend_id?: string | null
          submission_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bss_pdf_sends_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "bss_submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      bss_rate_limits: {
        Row: {
          attempt_count: number | null
          created_at: string | null
          id: string
          identifier: string
          identifier_type: string
          window_start: string
        }
        Insert: {
          attempt_count?: number | null
          created_at?: string | null
          id?: string
          identifier: string
          identifier_type: string
          window_start?: string
        }
        Update: {
          attempt_count?: number | null
          created_at?: string | null
          id?: string
          identifier?: string
          identifier_type?: string
          window_start?: string
        }
        Relationships: []
      }
      bss_submissions: {
        Row: {
          ab_variant: string | null
          budget_range: string | null
          business_idea: string
          created_at: string | null
          email: string
          id: string
          input_hash: string
          language: string | null
          niche: string | null
          session_id: string | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
        }
        Insert: {
          ab_variant?: string | null
          budget_range?: string | null
          business_idea: string
          created_at?: string | null
          email: string
          id?: string
          input_hash: string
          language?: string | null
          niche?: string | null
          session_id?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Update: {
          ab_variant?: string | null
          budget_range?: string | null
          business_idea?: string
          created_at?: string | null
          email?: string
          id?: string
          input_hash?: string
          language?: string | null
          niche?: string | null
          session_id?: string | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
        }
        Relationships: []
      }
      bucket_list_data: {
        Row: {
          created_at: string
          id: string
          ideas: Json
          input_state: Json | null
          is_pro: boolean
          plan: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          ideas?: Json
          input_state?: Json | null
          is_pro?: boolean
          plan?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          ideas?: Json
          input_state?: Json | null
          is_pro?: boolean
          plan?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      business_ideas: {
        Row: {
          created_at: string
          customer_problem: string | null
          id: string
          idea_text: string
          marketing_strategy: string | null
          mvp_plan: string | null
          offerings: Json | null
          target_audience: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          customer_problem?: string | null
          id?: string
          idea_text: string
          marketing_strategy?: string | null
          mvp_plan?: string | null
          offerings?: Json | null
          target_audience?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          customer_problem?: string | null
          id?: string
          idea_text?: string
          marketing_strategy?: string | null
          mvp_plan?: string | null
          offerings?: Json | null
          target_audience?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      buyer_profiles: {
        Row: {
          awareness_stage: string
          category: string
          channels: string[]
          competitors: Json | null
          created_at: string
          decision_cycle: string
          detail_level: string
          generated_data: Json | null
          guest_id: string | null
          id: string
          language: string
          markets: string[]
          price_model: string
          product_description: string
          product_name: string
          sources: string[] | null
          status: string
          title: string
          tone: string
          updated_at: string
          use_cases: string[]
          user_id: string
        }
        Insert: {
          awareness_stage: string
          category: string
          channels?: string[]
          competitors?: Json | null
          created_at?: string
          decision_cycle: string
          detail_level?: string
          generated_data?: Json | null
          guest_id?: string | null
          id?: string
          language?: string
          markets?: string[]
          price_model: string
          product_description: string
          product_name: string
          sources?: string[] | null
          status?: string
          title: string
          tone?: string
          updated_at?: string
          use_cases?: string[]
          user_id: string
        }
        Update: {
          awareness_stage?: string
          category?: string
          channels?: string[]
          competitors?: Json | null
          created_at?: string
          decision_cycle?: string
          detail_level?: string
          generated_data?: Json | null
          guest_id?: string | null
          id?: string
          language?: string
          markets?: string[]
          price_model?: string
          product_description?: string
          product_name?: string
          sources?: string[] | null
          status?: string
          title?: string
          tone?: string
          updated_at?: string
          use_cases?: string[]
          user_id?: string
        }
        Relationships: []
      }
      categories: {
        Row: {
          created_at: string
          id: string
          menu_id: string
          name: string
          position: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          menu_id: string
          name: string
          position?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          menu_id?: string
          name?: string
          position?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_menu_id_fkey"
            columns: ["menu_id"]
            isOneToOne: false
            referencedRelation: "menus"
            referencedColumns: ["id"]
          },
        ]
      }
      channels: {
        Row: {
          access_token: string | null
          account_name: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          meta: Json | null
          oauth_provider: string | null
          refresh_token: string | null
          scopes: string[] | null
          type: string
          workspace_id: string
        }
        Insert: {
          access_token?: string | null
          account_name?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          meta?: Json | null
          oauth_provider?: string | null
          refresh_token?: string | null
          scopes?: string[] | null
          type: string
          workspace_id: string
        }
        Update: {
          access_token?: string | null
          account_name?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          meta?: Json | null
          oauth_provider?: string | null
          refresh_token?: string | null
          scopes?: string[] | null
          type?: string
          workspace_id?: string
        }
        Relationships: []
      }
      chat_history: {
        Row: {
          content: string
          created_at: string
          id: string
          role: string
          session_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          role: string
          session_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          role?: string
          session_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_history_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "coaching_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          client_id: string | null
          created_at: string
          id: string
          message: string
          sender: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          id?: string
          message: string
          sender: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          id?: string
          message?: string
          sender?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      chats: {
        Row: {
          content: string
          created_at: string | null
          id: string
          role: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          role?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          role?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          created_at: string
          description: string | null
          email: string
          id: string
          last_activity: string
          name: string
          phase: string
          project_name: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          email: string
          id?: string
          last_activity?: string
          name: string
          phase?: string
          project_name: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          email?: string
          id?: string
          last_activity?: string
          name?: string
          phase?: string
          project_name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      cms_faq: {
        Row: {
          answer: string
          created_at: string | null
          id: string
          is_published: boolean | null
          position: number | null
          question: string
        }
        Insert: {
          answer: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          position?: number | null
          question: string
        }
        Update: {
          answer?: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          position?: number | null
          question?: string
        }
        Relationships: []
      }
      cms_posts: {
        Row: {
          content: string | null
          cover_url: string | null
          created_at: string | null
          excerpt: string | null
          id: string
          is_published: boolean | null
          slug: string
          title: string
          updated_at: string | null
        }
        Insert: {
          content?: string | null
          cover_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_published?: boolean | null
          slug: string
          title: string
          updated_at?: string | null
        }
        Update: {
          content?: string | null
          cover_url?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: string
          is_published?: boolean | null
          slug?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cms_testimonials: {
        Row: {
          author: string
          avatar_url: string | null
          content: string
          created_at: string | null
          id: string
          is_published: boolean | null
          role: string | null
        }
        Insert: {
          author: string
          avatar_url?: string | null
          content: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          role?: string | null
        }
        Update: {
          author?: string
          avatar_url?: string | null
          content?: string
          created_at?: string | null
          id?: string
          is_published?: boolean | null
          role?: string | null
        }
        Relationships: []
      }
      coaching_goals: {
        Row: {
          area: string
          created_at: string
          horizon: string | null
          id: string
          metric: string | null
          outcome: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          area: string
          created_at?: string
          horizon?: string | null
          id?: string
          metric?: string | null
          outcome?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          area?: string
          created_at?: string
          horizon?: string | null
          id?: string
          metric?: string | null
          outcome?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      coaching_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          pinned: boolean | null
          role: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          pinned?: boolean | null
          role: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          pinned?: boolean | null
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      coaching_sessions: {
        Row: {
          created_at: string
          id: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          author_id: string | null
          body: string
          created_at: string | null
          id: string
          map_id: string
          node_id: string | null
        }
        Insert: {
          author_id?: string | null
          body: string
          created_at?: string | null
          id?: string
          map_id: string
          node_id?: string | null
        }
        Update: {
          author_id?: string | null
          body?: string
          created_at?: string | null
          id?: string
          map_id?: string
          node_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_node_id_fkey"
            columns: ["node_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          address: string | null
          company: string | null
          created_at: string
          email: string | null
          first_name: string
          id: string
          last_contact_date: string | null
          last_name: string
          lead_source: string | null
          lead_status: string | null
          notes: string | null
          phone: string | null
          position: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          first_name: string
          id?: string
          last_contact_date?: string | null
          last_name: string
          lead_source?: string | null
          lead_status?: string | null
          notes?: string | null
          phone?: string | null
          position?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          last_contact_date?: string | null
          last_name?: string
          lead_source?: string | null
          lead_status?: string | null
          notes?: string | null
          phone?: string | null
          position?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      content_calendar: {
        Row: {
          content_type: string | null
          created_at: string | null
          id: string
          payload: Json | null
          planned_at: string
          platform: string
          status: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content_type?: string | null
          created_at?: string | null
          id?: string
          payload?: Json | null
          planned_at: string
          platform: string
          status?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content_type?: string | null
          created_at?: string | null
          id?: string
          payload?: Json | null
          planned_at?: string
          platform?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      content_strategy: {
        Row: {
          completed_at: string | null
          content_calendar: Json | null
          content_pillars: string[] | null
          content_types: string[] | null
          created_at: string
          hashtag_strategy: string | null
          id: string
          platforms: string[] | null
          posting_frequency: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          content_calendar?: Json | null
          content_pillars?: string[] | null
          content_types?: string[] | null
          created_at?: string
          hashtag_strategy?: string | null
          id?: string
          platforms?: string[] | null
          posting_frequency?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          content_calendar?: Json | null
          content_pillars?: string[] | null
          content_types?: string[] | null
          created_at?: string
          hashtag_strategy?: string | null
          id?: string
          platforms?: string[] | null
          posting_frequency?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      content_templates: {
        Row: {
          body_template: string
          created_at: string
          created_by: string | null
          description: string | null
          goal: string | null
          id: string
          is_global: boolean
          language: string | null
          name: string
          platform: string
          tags: string[] | null
          tone: string | null
          updated_at: string
          usage_count: number
          workspace_id: string | null
        }
        Insert: {
          body_template: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          goal?: string | null
          id?: string
          is_global?: boolean
          language?: string | null
          name: string
          platform: string
          tags?: string[] | null
          tone?: string | null
          updated_at?: string
          usage_count?: number
          workspace_id?: string | null
        }
        Update: {
          body_template?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          goal?: string | null
          id?: string
          is_global?: boolean
          language?: string | null
          name?: string
          platform?: string
          tags?: string[] | null
          tone?: string | null
          updated_at?: string
          usage_count?: number
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_templates_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contracts: {
        Row: {
          bid_id: string
          client_tenant: string
          created_at: string | null
          id: string
          job_id: string
          milestones: Json | null
          price_total: number
          provider_tenant: string
          status: Database["public"]["Enums"]["contract_status"] | null
          updated_at: string | null
        }
        Insert: {
          bid_id: string
          client_tenant: string
          created_at?: string | null
          id?: string
          job_id: string
          milestones?: Json | null
          price_total: number
          provider_tenant: string
          status?: Database["public"]["Enums"]["contract_status"] | null
          updated_at?: string | null
        }
        Update: {
          bid_id?: string
          client_tenant?: string
          created_at?: string | null
          id?: string
          job_id?: string
          milestones?: Json | null
          price_total?: number
          provider_tenant?: string
          status?: Database["public"]["Enums"]["contract_status"] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_bid_id_fkey"
            columns: ["bid_id"]
            isOneToOne: false
            referencedRelation: "bids"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_client_tenant_fkey"
            columns: ["client_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contracts_provider_tenant_fkey"
            columns: ["provider_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      credits: {
        Row: {
          ai_credits_used: number | null
          month: string
          publish_count: number | null
          workspace_id: string
        }
        Insert: {
          ai_credits_used?: number | null
          month: string
          publish_count?: number | null
          workspace_id: string
        }
        Update: {
          ai_credits_used?: number | null
          month?: string
          publish_count?: number | null
          workspace_id?: string
        }
        Relationships: []
      }
      crm_logs: {
        Row: {
          created_at: string
          id: string
          message: string | null
          payload: Json
          provider: string
          status: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          payload: Json
          provider: string
          status?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          payload?: Json
          provider?: string
          status?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "crm_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_messages: {
        Row: {
          affirmation: string | null
          created_at: string | null
          date: string
          id: string
          journal_prompt: string | null
          message_short: string
          ritual: string | null
          steps: string[] | null
          user_id: string | null
        }
        Insert: {
          affirmation?: string | null
          created_at?: string | null
          date: string
          id?: string
          journal_prompt?: string | null
          message_short: string
          ritual?: string | null
          steps?: string[] | null
          user_id?: string | null
        }
        Update: {
          affirmation?: string | null
          created_at?: string | null
          date?: string
          id?: string
          journal_prompt?: string | null
          message_short?: string
          ritual?: string | null
          steps?: string[] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_progress: {
        Row: {
          active_step: Database["public"]["Enums"]["step_type"] | null
          created_at: string | null
          date: string | null
          id: string
          mood_after: number | null
          mood_before: number | null
          notes: string | null
          user_id: string
        }
        Insert: {
          active_step?: Database["public"]["Enums"]["step_type"] | null
          created_at?: string | null
          date?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          user_id: string
        }
        Update: {
          active_step?: Database["public"]["Enums"]["step_type"] | null
          created_at?: string | null
          date?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          notes?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_progress_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_usage: {
        Row: {
          ai_calls: number | null
          created_at: string
          day: string
          maps_created: number | null
          tokens: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_calls?: number | null
          created_at?: string
          day: string
          maps_created?: number | null
          tokens?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_calls?: number | null
          created_at?: string
          day?: string
          maps_created?: number | null
          tokens?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      day_plans: {
        Row: {
          created_at: string
          data: Json | null
          duration_min: number | null
          id: string
          lang: string | null
          persona: string | null
          share_token: string | null
          tenant_id: string
          title: string
        }
        Insert: {
          created_at?: string
          data?: Json | null
          duration_min?: number | null
          id?: string
          lang?: string | null
          persona?: string | null
          share_token?: string | null
          tenant_id: string
          title: string
        }
        Update: {
          created_at?: string
          data?: Json | null
          duration_min?: number | null
          id?: string
          lang?: string | null
          persona?: string | null
          share_token?: string | null
          tenant_id?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "day_plans_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      decisions: {
        Row: {
          category: string
          constraints_context: string | null
          created_at: string
          description: string | null
          id: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string
          constraints_context?: string | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          constraints_context?: string | null
          created_at?: string
          description?: string | null
          id?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      diary_entries: {
        Row: {
          content: string
          created_at: string | null
          entry_type: Database["public"]["Enums"]["entry_type"]
          id: string
          step_type: Database["public"]["Enums"]["step_type"]
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          entry_type: Database["public"]["Enums"]["entry_type"]
          id?: string
          step_type: Database["public"]["Enums"]["step_type"]
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          entry_type?: Database["public"]["Enums"]["entry_type"]
          id?: string
          step_type?: Database["public"]["Enums"]["step_type"]
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diary_entries_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      edges: {
        Row: {
          created_at: string | null
          from_id: string
          id: string
          map_id: string
          style: Json | null
          to_id: string
          type: string | null
        }
        Insert: {
          created_at?: string | null
          from_id: string
          id?: string
          map_id: string
          style?: Json | null
          to_id: string
          type?: string | null
        }
        Update: {
          created_at?: string | null
          from_id?: string
          id?: string
          map_id?: string
          style?: Json | null
          to_id?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "edges_from_id_fkey"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edges_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "edges_to_id_fkey"
            columns: ["to_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_edges_from_id"
            columns: ["from_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_edges_map_id"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_edges_to_id"
            columns: ["to_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      email_captures: {
        Row: {
          business_idea_id: string | null
          created_at: string
          email: string
          id: string
          meeting_scheduled: boolean | null
          pdf_generated: boolean | null
        }
        Insert: {
          business_idea_id?: string | null
          created_at?: string
          email: string
          id?: string
          meeting_scheduled?: boolean | null
          pdf_generated?: boolean | null
        }
        Update: {
          business_idea_id?: string | null
          created_at?: string
          email?: string
          id?: string
          meeting_scheduled?: boolean | null
          pdf_generated?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "email_captures_business_idea_id_fkey"
            columns: ["business_idea_id"]
            isOneToOne: false
            referencedRelation: "business_ideas"
            referencedColumns: ["id"]
          },
        ]
      }
      email_projects: {
        Row: {
          created_at: string
          data: Json | null
          id: string
          industry: string | null
          language: string | null
          name: string
          sequence: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          data?: Json | null
          id?: string
          industry?: string | null
          language?: string | null
          name: string
          sequence?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          data?: Json | null
          id?: string
          industry?: string | null
          language?: string | null
          name?: string
          sequence?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      embeddings_cache: {
        Row: {
          content: string
          created_at: string | null
          embedding: string | null
          id: string
          key: string
          map_id: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          key: string
          map_id?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          embedding?: string | null
          id?: string
          key?: string
          map_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "embeddings_cache_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
        ]
      }
      escrow: {
        Row: {
          amount: number
          captured: boolean | null
          contract_id: string
          created_at: string | null
          currency: string | null
          held: boolean | null
          id: number
          refunded: boolean | null
          stripe_pi: string | null
        }
        Insert: {
          amount: number
          captured?: boolean | null
          contract_id: string
          created_at?: string | null
          currency?: string | null
          held?: boolean | null
          id?: number
          refunded?: boolean | null
          stripe_pi?: string | null
        }
        Update: {
          amount?: number
          captured?: boolean | null
          contract_id?: string
          created_at?: string | null
          currency?: string | null
          held?: boolean | null
          id?: number
          refunded?: boolean | null
          stripe_pi?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "escrow_contract_id_fkey"
            columns: ["contract_id"]
            isOneToOne: false
            referencedRelation: "contracts"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          analysis_id: string | null
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          ip_address: string | null
          report_id: string | null
          user_agent: string | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          report_id?: string | null
          user_agent?: string | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          report_id?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      exercises: {
        Row: {
          completed_at: string | null
          duration_minutes: number | null
          exercise_name: string
          id: string
          notes: string | null
          result: string | null
          step_type: Database["public"]["Enums"]["step_type"]
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          duration_minutes?: number | null
          exercise_name: string
          id?: string
          notes?: string | null
          result?: string | null
          step_type: Database["public"]["Enums"]["step_type"]
          user_id: string
        }
        Update: {
          completed_at?: string | null
          duration_minutes?: number | null
          exercise_name?: string
          id?: string
          notes?: string | null
          result?: string | null
          step_type?: Database["public"]["Enums"]["step_type"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercises_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      festival_events: {
        Row: {
          category: string | null
          cover_url: string | null
          created_at: string
          description: string | null
          end_at: string
          id: string
          lang: string | null
          persona_tags: string[] | null
          start_at: string
          status: string | null
          tenant_id: string
          title: string
          updated_at: string
          venue_id: string | null
        }
        Insert: {
          category?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          end_at: string
          id?: string
          lang?: string | null
          persona_tags?: string[] | null
          start_at: string
          status?: string | null
          tenant_id: string
          title: string
          updated_at?: string
          venue_id?: string | null
        }
        Update: {
          category?: string | null
          cover_url?: string | null
          created_at?: string
          description?: string | null
          end_at?: string
          id?: string
          lang?: string | null
          persona_tags?: string[] | null
          start_at?: string
          status?: string | null
          tenant_id?: string
          title?: string
          updated_at?: string
          venue_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "festival_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "festival_events_venue_id_fkey"
            columns: ["venue_id"]
            isOneToOne: false
            referencedRelation: "venues"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_api_keys: {
        Row: {
          created_at: string
          id: string
          key_hash: string
          label: string
          last_used_at: string | null
          revoked_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key_hash: string
          label: string
          last_used_at?: string | null
          revoked_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key_hash?: string
          label?: string
          last_used_at?: string | null
          revoked_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      fp_webhook_logs: {
        Row: {
          attempt_count: number | null
          created_at: string
          delivered_at: string | null
          event_type: string
          id: string
          payload: Json
          response_body: string | null
          response_status: number | null
          webhook_id: string
        }
        Insert: {
          attempt_count?: number | null
          created_at?: string
          delivered_at?: string | null
          event_type: string
          id?: string
          payload: Json
          response_body?: string | null
          response_status?: number | null
          webhook_id: string
        }
        Update: {
          attempt_count?: number | null
          created_at?: string
          delivered_at?: string | null
          event_type?: string
          id?: string
          payload?: Json
          response_body?: string | null
          response_status?: number | null
          webhook_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fp_webhook_logs_webhook_id_fkey"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "fp_webhooks"
            referencedColumns: ["id"]
          },
        ]
      }
      fp_webhooks: {
        Row: {
          created_at: string
          events: string[]
          id: string
          last_delivery_at: string | null
          secret: string
          status: string
          updated_at: string
          url: string
          user_id: string
        }
        Insert: {
          created_at?: string
          events?: string[]
          id?: string
          last_delivery_at?: string | null
          secret: string
          status?: string
          updated_at?: string
          url: string
          user_id: string
        }
        Update: {
          created_at?: string
          events?: string[]
          id?: string
          last_delivery_at?: string | null
          secret?: string
          status?: string
          updated_at?: string
          url?: string
          user_id?: string
        }
        Relationships: []
      }
      generated_prompts: {
        Row: {
          context_input: string | null
          created_at: string
          format_input: string | null
          goal_input: string | null
          id: string
          is_favorite: boolean | null
          language: string | null
          metadata: Json | null
          prompt_text: string
          role_input: string | null
          target_model: string | null
          template_id: string | null
          tone: string | null
          user_id: string
        }
        Insert: {
          context_input?: string | null
          created_at?: string
          format_input?: string | null
          goal_input?: string | null
          id?: string
          is_favorite?: boolean | null
          language?: string | null
          metadata?: Json | null
          prompt_text: string
          role_input?: string | null
          target_model?: string | null
          template_id?: string | null
          tone?: string | null
          user_id: string
        }
        Update: {
          context_input?: string | null
          created_at?: string
          format_input?: string | null
          goal_input?: string | null
          id?: string
          is_favorite?: boolean | null
          language?: string | null
          metadata?: Json | null
          prompt_text?: string
          role_input?: string | null
          target_model?: string | null
          template_id?: string | null
          tone?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "generated_prompts_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "prompt_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      goals: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      habits: {
        Row: {
          anchor_time: string | null
          cadence: string | null
          created_at: string
          id: string
          last_checkin: string | null
          name: string
          streak_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          anchor_time?: string | null
          cadence?: string | null
          created_at?: string
          id?: string
          last_checkin?: string | null
          name: string
          streak_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          anchor_time?: string | null
          cadence?: string | null
          created_at?: string
          id?: string
          last_checkin?: string | null
          name?: string
          streak_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      inbox_events: {
        Row: {
          author: string | null
          channel_id: string | null
          created_at: string | null
          id: string
          sentiment: number | null
          text: string | null
          type: string
          workspace_id: string
        }
        Insert: {
          author?: string | null
          channel_id?: string | null
          created_at?: string | null
          id?: string
          sentiment?: number | null
          text?: string | null
          type: string
          workspace_id: string
        }
        Update: {
          author?: string | null
          channel_id?: string | null
          created_at?: string | null
          id?: string
          sentiment?: number | null
          text?: string | null
          type?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_events_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_messages: {
        Row: {
          author: string
          created_at: string
          direction: string | null
          id: string
          meta: Json | null
          sentiment: number | null
          text: string
          thread_id: string
          workspace_id: string
        }
        Insert: {
          author: string
          created_at?: string
          direction?: string | null
          id?: string
          meta?: Json | null
          sentiment?: number | null
          text: string
          thread_id: string
          workspace_id: string
        }
        Update: {
          author?: string
          created_at?: string
          direction?: string | null
          id?: string
          meta?: Json | null
          sentiment?: number | null
          text?: string
          thread_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_messages_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "inbox_threads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_messages_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      inbox_threads: {
        Row: {
          assigned_to: string | null
          channel_id: string | null
          created_at: string
          id: string
          last_activity: string
          meta: Json | null
          provider_thread_id: string | null
          status: string | null
          subject: string | null
          workspace_id: string
        }
        Insert: {
          assigned_to?: string | null
          channel_id?: string | null
          created_at?: string
          id?: string
          last_activity?: string
          meta?: Json | null
          provider_thread_id?: string | null
          status?: string | null
          subject?: string | null
          workspace_id: string
        }
        Update: {
          assigned_to?: string | null
          channel_id?: string | null
          created_at?: string
          id?: string
          last_activity?: string
          meta?: Json | null
          provider_thread_id?: string | null
          status?: string | null
          subject?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "inbox_threads_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inbox_threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      invoice_clients: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          email: string | null
          id: string
          is_favorite: boolean | null
          name: string
          oib: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_favorite?: boolean | null
          name: string
          oib?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_favorite?: boolean | null
          name?: string
          oib?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          created_at: string
          description: string | null
          id: string
          invoice_id: string
          name: string
          quantity: number
          total: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          invoice_id: string
          name: string
          quantity?: number
          total?: number
          unit_price?: number
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          invoice_id?: string
          name?: string
          quantity?: number
          total?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "invoice_items_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          client_address: string | null
          client_email: string | null
          client_id: string | null
          client_name: string
          client_oib: string | null
          created_at: string
          currency: string
          due_date: string | null
          id: string
          invoice_date: string
          invoice_number: string
          notes: string | null
          pdf_url: string | null
          status: string
          subtotal: number
          tax_amount: number
          tax_rate: number
          template_type: string
          total: number
          updated_at: string
          user_id: string
        }
        Insert: {
          client_address?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name: string
          client_oib?: string | null
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_date?: string
          invoice_number: string
          notes?: string | null
          pdf_url?: string | null
          status?: string
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          template_type?: string
          total?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          client_address?: string | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string
          client_oib?: string | null
          created_at?: string
          currency?: string
          due_date?: string | null
          id?: string
          invoice_date?: string
          invoice_number?: string
          notes?: string | null
          pdf_url?: string | null
          status?: string
          subtotal?: number
          tax_amount?: number
          tax_rate?: number
          template_type?: string
          total?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      item_allergens: {
        Row: {
          allergen_id: number
          id: number
          item_id: string
        }
        Insert: {
          allergen_id: number
          id?: number
          item_id: string
        }
        Update: {
          allergen_id?: number
          id?: number
          item_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "item_allergens_allergen_id_fkey"
            columns: ["allergen_id"]
            isOneToOne: false
            referencedRelation: "allergens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "item_allergens_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "menu_items"
            referencedColumns: ["id"]
          },
        ]
      }
      job_ai_specs: {
        Row: {
          budget_suggest: number | null
          created_at: string | null
          eta_days: number | null
          id: number
          job_id: string
          labor_hours_est: number | null
          materials: Json | null
          risks: string[] | null
          summary: string | null
        }
        Insert: {
          budget_suggest?: number | null
          created_at?: string | null
          eta_days?: number | null
          id?: number
          job_id: string
          labor_hours_est?: number | null
          materials?: Json | null
          risks?: string[] | null
          summary?: string | null
        }
        Update: {
          budget_suggest?: number | null
          created_at?: string | null
          eta_days?: number | null
          id?: number
          job_id?: string
          labor_hours_est?: number | null
          materials?: Json | null
          risks?: string[] | null
          summary?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_ai_specs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      job_media: {
        Row: {
          created_at: string | null
          id: number
          job_id: string
          type: Database["public"]["Enums"]["media_type"]
          url: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_id: string
          type: Database["public"]["Enums"]["media_type"]
          url: string
        }
        Update: {
          created_at?: string | null
          id?: number
          job_id?: string
          type?: Database["public"]["Enums"]["media_type"]
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_media_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          address_masked: string | null
          attempts: number
          budget_max: number | null
          budget_min: number | null
          category: string | null
          city: string | null
          client_tenant: string | null
          created_at: string | null
          deadline: string | null
          description: string | null
          due_at: string
          id: string
          last_error: string | null
          lat: number | null
          lng: number | null
          payload: Json
          preferred_date: string | null
          radius_km: number | null
          status: string
          title: string | null
          type: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          address_masked?: string | null
          attempts?: number
          budget_max?: number | null
          budget_min?: number | null
          category?: string | null
          city?: string | null
          client_tenant?: string | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          due_at?: string
          id?: string
          last_error?: string | null
          lat?: number | null
          lng?: number | null
          payload: Json
          preferred_date?: string | null
          radius_km?: number | null
          status?: string
          title?: string | null
          type: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          address_masked?: string | null
          attempts?: number
          budget_max?: number | null
          budget_min?: number | null
          category?: string | null
          city?: string | null
          client_tenant?: string | null
          created_at?: string | null
          deadline?: string | null
          description?: string | null
          due_at?: string
          id?: string
          last_error?: string | null
          lat?: number | null
          lng?: number | null
          payload?: Json
          preferred_date?: string | null
          radius_km?: number | null
          status?: string
          title?: string | null
          type?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "jobs_client_tenant_fkey"
            columns: ["client_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      journal_entries: {
        Row: {
          content: string | null
          created_at: string
          date: string
          freedom_moment: string | null
          gratitude_1: string | null
          gratitude_2: string | null
          gratitude_3: string | null
          id: string
          mood_after: number | null
          mood_before: number | null
          step: number | null
          tags: string[] | null
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          date?: string
          freedom_moment?: string | null
          gratitude_1?: string | null
          gratitude_2?: string | null
          gratitude_3?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          step?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          date?: string
          freedom_moment?: string | null
          gratitude_1?: string | null
          gratitude_2?: string | null
          gratitude_3?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          step?: number | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      journals: {
        Row: {
          content: string
          created_at: string | null
          id: string
          mood_after: number | null
          mood_before: number | null
          tags: string[] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          mood_after?: number | null
          mood_before?: number | null
          tags?: string[] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "journals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      keywords: {
        Row: {
          competitors: string[]
          created_at: string
          exclude: string[]
          id: string
          include: string[]
          language: string | null
          smart_routes: Json
          workspace_id: string
        }
        Insert: {
          competitors?: string[]
          created_at?: string
          exclude?: string[]
          id?: string
          include?: string[]
          language?: string | null
          smart_routes?: Json
          workspace_id: string
        }
        Update: {
          competitors?: string[]
          created_at?: string
          exclude?: string[]
          id?: string
          include?: string[]
          language?: string | null
          smart_routes?: Json
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keywords_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      launch_segments: {
        Row: {
          created_at: string
          email: string
          id: string
          idea_status: string | null
          launch_experience: string | null
          main_challenge: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          idea_status?: string | null
          launch_experience?: string | null
          main_challenge?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          idea_status?: string | null
          launch_experience?: string | null
          main_challenge?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          created_at: string
          email: string
          id: string
          metadata: Json | null
          source: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          metadata?: Json | null
          source?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          metadata?: Json | null
          source?: string | null
        }
        Relationships: []
      }
      locations: {
        Row: {
          address: string | null
          city: string | null
          created_at: string
          id: string
          name: string
          phone: string | null
          tenant_id: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          city?: string | null
          created_at?: string
          id?: string
          name: string
          phone?: string | null
          tenant_id: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          city?: string | null
          created_at?: string
          id?: string
          name?: string
          phone?: string | null
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "locations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      map_edges: {
        Row: {
          confidence: number | null
          created_at: string
          data: Json | null
          id: string
          mindmap_id: string
          relation: string
          source_node: string
          target_node: string
        }
        Insert: {
          confidence?: number | null
          created_at?: string
          data?: Json | null
          id?: string
          mindmap_id: string
          relation: string
          source_node: string
          target_node: string
        }
        Update: {
          confidence?: number | null
          created_at?: string
          data?: Json | null
          id?: string
          mindmap_id?: string
          relation?: string
          source_node?: string
          target_node?: string
        }
        Relationships: [
          {
            foreignKeyName: "map_edges_mindmap_id_fkey"
            columns: ["mindmap_id"]
            isOneToOne: false
            referencedRelation: "mindmaps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "map_edges_source_node_fkey"
            columns: ["source_node"]
            isOneToOne: false
            referencedRelation: "map_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "map_edges_target_node_fkey"
            columns: ["target_node"]
            isOneToOne: false
            referencedRelation: "map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      map_expand_cache: {
        Row: {
          canonical_key: string
          created_at: string
          edges_json: Json
          filters_hash: string
          id: string
          nodes_json: Json
          user_id: string
        }
        Insert: {
          canonical_key: string
          created_at?: string
          edges_json?: Json
          filters_hash: string
          id?: string
          nodes_json?: Json
          user_id: string
        }
        Update: {
          canonical_key?: string
          created_at?: string
          edges_json?: Json
          filters_hash?: string
          id?: string
          nodes_json?: Json
          user_id?: string
        }
        Relationships: []
      }
      map_node_citations: {
        Row: {
          chunk_id: string | null
          created_at: string
          id: string
          meta: Json | null
          node_id: string
          quote: string | null
          score: number | null
          source_id: string | null
          user_id: string
        }
        Insert: {
          chunk_id?: string | null
          created_at?: string
          id?: string
          meta?: Json | null
          node_id: string
          quote?: string | null
          score?: number | null
          source_id?: string | null
          user_id: string
        }
        Update: {
          chunk_id?: string | null
          created_at?: string
          id?: string
          meta?: Json | null
          node_id?: string
          quote?: string | null
          score?: number | null
          source_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "map_node_citations_node_id_fkey"
            columns: ["node_id"]
            isOneToOne: false
            referencedRelation: "map_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      map_nodes: {
        Row: {
          canonical_key: string
          cluster: number | null
          created_at: string
          data: Json | null
          depth: number | null
          has_more: boolean | null
          id: string
          label: string
          mindmap_id: string
          score: number | null
          source_count: number | null
          state: string | null
          x: number | null
          y: number | null
        }
        Insert: {
          canonical_key: string
          cluster?: number | null
          created_at?: string
          data?: Json | null
          depth?: number | null
          has_more?: boolean | null
          id?: string
          label: string
          mindmap_id: string
          score?: number | null
          source_count?: number | null
          state?: string | null
          x?: number | null
          y?: number | null
        }
        Update: {
          canonical_key?: string
          cluster?: number | null
          created_at?: string
          data?: Json | null
          depth?: number | null
          has_more?: boolean | null
          id?: string
          label?: string
          mindmap_id?: string
          score?: number | null
          source_count?: number | null
          state?: string | null
          x?: number | null
          y?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "map_nodes_mindmap_id_fkey"
            columns: ["mindmap_id"]
            isOneToOne: false
            referencedRelation: "mindmaps"
            referencedColumns: ["id"]
          },
        ]
      }
      map_shares: {
        Row: {
          created_at: string | null
          created_by: string | null
          email: string | null
          expires_at: string | null
          id: string
          map_id: string
          revoked: boolean | null
          role: string | null
          token: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          expires_at?: string | null
          id?: string
          map_id: string
          revoked?: boolean | null
          role?: string | null
          token?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          email?: string | null
          expires_at?: string | null
          id?: string
          map_id?: string
          revoked?: boolean | null
          role?: string | null
          token?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "map_shares_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
        ]
      }
      maps: {
        Row: {
          created_at: string | null
          id: string
          is_public: boolean | null
          owner_id: string
          settings: Json | null
          share_token: string | null
          structure: string | null
          team_id: string | null
          theme: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          owner_id: string
          settings?: Json | null
          share_token?: string | null
          structure?: string | null
          team_id?: string | null
          theme?: Json | null
          title?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          owner_id?: string
          settings?: Json | null
          share_token?: string | null
          structure?: string | null
          team_id?: string | null
          theme?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "maps_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          role: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          role: string
          user_id: string
          workspace_id: string
        }
        Update: {
          role?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      mental_model_sessions: {
        Row: {
          completed: boolean
          created_at: string
          current_step: number
          id: string
          result_data: Json | null
          selected_models: string[] | null
          topic: string
          updated_at: string
          user_context: Json
          user_id: string
        }
        Insert: {
          completed?: boolean
          created_at?: string
          current_step?: number
          id?: string
          result_data?: Json | null
          selected_models?: string[] | null
          topic: string
          updated_at?: string
          user_context?: Json
          user_id: string
        }
        Update: {
          completed?: boolean
          created_at?: string
          current_step?: number
          id?: string
          result_data?: Json | null
          selected_models?: string[] | null
          topic?: string
          updated_at?: string
          user_context?: Json
          user_id?: string
        }
        Relationships: []
      }
      menu_items: {
        Row: {
          category_id: string | null
          created_at: string
          currency: string | null
          description: string | null
          id: string
          is_gluten_free: boolean | null
          is_vegan: boolean | null
          is_vegetarian: boolean | null
          menu_id: string
          name: string
          photo_url: string | null
          position: number | null
          price_cents: number
          updated_at: string
          weight_grams: number | null
        }
        Insert: {
          category_id?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          is_gluten_free?: boolean | null
          is_vegan?: boolean | null
          is_vegetarian?: boolean | null
          menu_id: string
          name: string
          photo_url?: string | null
          position?: number | null
          price_cents?: number
          updated_at?: string
          weight_grams?: number | null
        }
        Update: {
          category_id?: string | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          is_gluten_free?: boolean | null
          is_vegan?: boolean | null
          is_vegetarian?: boolean | null
          menu_id?: string
          name?: string
          photo_url?: string | null
          position?: number | null
          price_cents?: number
          updated_at?: string
          weight_grams?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_items_menu_id_fkey"
            columns: ["menu_id"]
            isOneToOne: false
            referencedRelation: "menus"
            referencedColumns: ["id"]
          },
        ]
      }
      menus: {
        Row: {
          created_at: string
          id: string
          lang: string | null
          location_id: string | null
          status: Database["public"]["Enums"]["menu_status"] | null
          tenant_id: string
          title: string
          updated_at: string
          version: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          lang?: string | null
          location_id?: string | null
          status?: Database["public"]["Enums"]["menu_status"] | null
          tenant_id: string
          title: string
          updated_at?: string
          version?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          lang?: string | null
          location_id?: string | null
          status?: Database["public"]["Enums"]["menu_status"] | null
          tenant_id?: string
          title?: string
          updated_at?: string
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "menus_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menus_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          attachment_url: string | null
          bid_id: string | null
          body: string
          created_at: string | null
          id: number
          job_id: string | null
          sender_tenant: string
        }
        Insert: {
          attachment_url?: string | null
          bid_id?: string | null
          body: string
          created_at?: string | null
          id?: number
          job_id?: string | null
          sender_tenant: string
        }
        Update: {
          attachment_url?: string | null
          bid_id?: string | null
          body?: string
          created_at?: string | null
          id?: number
          job_id?: string | null
          sender_tenant?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_bid_id_fkey"
            columns: ["bid_id"]
            isOneToOne: false
            referencedRelation: "bids"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_tenant_fkey"
            columns: ["sender_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      mindmap_nodes: {
        Row: {
          category: string
          connections: string[] | null
          created_at: string
          description: string | null
          example: string | null
          id: string
          title: string
          updated_at: string
          user_id: string
          x: number
          y: number
        }
        Insert: {
          category: string
          connections?: string[] | null
          created_at?: string
          description?: string | null
          example?: string | null
          id?: string
          title: string
          updated_at?: string
          user_id: string
          x: number
          y: number
        }
        Update: {
          category?: string
          connections?: string[] | null
          created_at?: string
          description?: string | null
          example?: string | null
          id?: string
          title?: string
          updated_at?: string
          user_id?: string
          x?: number
          y?: number
        }
        Relationships: []
      }
      mindmaps: {
        Row: {
          created_at: string
          description: string | null
          id: string
          source_filter: Json | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          source_filter?: Json | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          source_filter?: Json | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mini_actions: {
        Row: {
          created_at: string | null
          date: string
          done: boolean
          goal_id: string
          id: string
          note: string | null
        }
        Insert: {
          created_at?: string | null
          date?: string
          done?: boolean
          goal_id: string
          id?: string
          note?: string | null
        }
        Update: {
          created_at?: string | null
          date?: string
          done?: boolean
          goal_id?: string
          id?: string
          note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mini_actions_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      monthly_usage: {
        Row: {
          month_key: string
          updated_at: string | null
          used_count: number | null
          user_id: string
        }
        Insert: {
          month_key: string
          updated_at?: string | null
          used_count?: number | null
          user_id: string
        }
        Update: {
          month_key?: string
          updated_at?: string | null
          used_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "monthly_usage_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      nodes: {
        Row: {
          id: string
          map_id: string
          notes: string | null
          order: number | null
          parent_id: string | null
          position: Json | null
          source: Json | null
          style: Json | null
          task: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          map_id: string
          notes?: string | null
          order?: number | null
          parent_id?: string | null
          position?: Json | null
          source?: Json | null
          style?: Json | null
          task?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          map_id?: string
          notes?: string | null
          order?: number | null
          parent_id?: string | null
          position?: Json | null
          source?: Json | null
          style?: Json | null
          task?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_nodes_map_id"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nodes_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "nodes_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      nova_goals: {
        Row: {
          created_at: string | null
          daily_actions: string[] | null
          description: string | null
          id: string
          is_completed: boolean | null
          step_type: Database["public"]["Enums"]["step_type"]
          target_date: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          daily_actions?: string[] | null
          description?: string | null
          id?: string
          is_completed?: boolean | null
          step_type: Database["public"]["Enums"]["step_type"]
          target_date?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          daily_actions?: string[] | null
          description?: string | null
          id?: string
          is_completed?: boolean | null
          step_type?: Database["public"]["Enums"]["step_type"]
          target_date?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "nova_goals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      numerology_calcs: {
        Row: {
          analysis_id: string
          challenges: Json | null
          created_at: string
          expression: number | null
          hidden_passion: Json | null
          id: string
          karmic_debts: Json | null
          karmic_lessons: Json | null
          life_path: number | null
          maturity: number | null
          person: string
          personal_year: number | null
          personality: number | null
          pinnacles: Json | null
          soul_urge: number | null
        }
        Insert: {
          analysis_id: string
          challenges?: Json | null
          created_at?: string
          expression?: number | null
          hidden_passion?: Json | null
          id?: string
          karmic_debts?: Json | null
          karmic_lessons?: Json | null
          life_path?: number | null
          maturity?: number | null
          person: string
          personal_year?: number | null
          personality?: number | null
          pinnacles?: Json | null
          soul_urge?: number | null
        }
        Update: {
          analysis_id?: string
          challenges?: Json | null
          created_at?: string
          expression?: number | null
          hidden_passion?: Json | null
          id?: string
          karmic_debts?: Json | null
          karmic_lessons?: Json | null
          life_path?: number | null
          maturity?: number | null
          person?: string
          personal_year?: number | null
          personality?: number | null
          pinnacles?: Json | null
          soul_urge?: number | null
        }
        Relationships: []
      }
      oauth_states: {
        Row: {
          created_at: string
          id: string
          provider: string
          redirect_uri: string
          state_token: string
          user_id: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          provider: string
          redirect_uri: string
          state_token: string
          user_id?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string
          id?: string
          provider?: string
          redirect_uri?: string
          state_token?: string
          user_id?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      og_cache: {
        Row: {
          created_at: string | null
          description: string | null
          image_url: string | null
          title: string | null
          token: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          image_url?: string | null
          title?: string | null
          token: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          image_url?: string | null
          title?: string | null
          token?: string
        }
        Relationships: []
      }
      onboarding_progress: {
        Row: {
          completed: boolean
          completed_at: string | null
          created_at: string
          current_step: number
          id: string
          language_preference: string | null
          steps_completed: Json
          timezone: string | null
          updated_at: string
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          language_preference?: string | null
          steps_completed?: Json
          timezone?: string | null
          updated_at?: string
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          completed?: boolean
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          language_preference?: string | null
          steps_completed?: Json
          timezone?: string | null
          updated_at?: string
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_progress_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      online_presence: {
        Row: {
          bio_template: string | null
          completed_at: string | null
          created_at: string
          digital_assets: Json | null
          id: string
          online_reputation: string | null
          seo_keywords: string[] | null
          social_profiles: Json | null
          updated_at: string
          user_id: string
          website_url: string | null
        }
        Insert: {
          bio_template?: string | null
          completed_at?: string | null
          created_at?: string
          digital_assets?: Json | null
          id?: string
          online_reputation?: string | null
          seo_keywords?: string[] | null
          social_profiles?: Json | null
          updated_at?: string
          user_id: string
          website_url?: string | null
        }
        Update: {
          bio_template?: string | null
          completed_at?: string | null
          created_at?: string
          digital_assets?: Json | null
          id?: string
          online_reputation?: string | null
          seo_keywords?: string[] | null
          social_profiles?: Json | null
          updated_at?: string
          user_id?: string
          website_url?: string | null
        }
        Relationships: []
      }
      partner_clicks: {
        Row: {
          clicked_at: string
          id: number
          partner_id: string
          referrer: string | null
          tenant_id: string
        }
        Insert: {
          clicked_at?: string
          id?: number
          partner_id: string
          referrer?: string | null
          tenant_id: string
        }
        Update: {
          clicked_at?: string
          id?: number
          partner_id?: string
          referrer?: string | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_clicks_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_clicks_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      partners: {
        Row: {
          commission_percent: number | null
          coupon: string | null
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          name: string
          tenant_id: string
          tracking_param: string | null
          updated_at: string
          url: string | null
        }
        Insert: {
          commission_percent?: number | null
          coupon?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name: string
          tenant_id: string
          tracking_param?: string | null
          updated_at?: string
          url?: string | null
        }
        Update: {
          commission_percent?: number | null
          coupon?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          tenant_id?: string
          tracking_param?: string | null
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partners_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          analysis_id: string
          created_at: string
          currency: string
          id: string
          provider: string | null
          provider_payment_id: string | null
          status: string
        }
        Insert: {
          amount: number
          analysis_id: string
          created_at?: string
          currency?: string
          id?: string
          provider?: string | null
          provider_payment_id?: string | null
          status?: string
        }
        Update: {
          amount?: number
          analysis_id?: string
          created_at?: string
          currency?: string
          id?: string
          provider?: string | null
          provider_payment_id?: string | null
          status?: string
        }
        Relationships: []
      }
      pb_tasks: {
        Row: {
          created_at: string
          description: string | null
          goal_id: string | null
          id: string
          quadrant: string
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          goal_id?: string | null
          id?: string
          quadrant: string
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          goal_id?: string | null
          id?: string
          quadrant?: string
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pb_tasks_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      pb_templates: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_default: boolean | null
          name: string
          template_data: Json
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          template_data: Json
          type: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          template_data?: Json
          type?: string
        }
        Relationships: []
      }
      pb_user_subscriptions: {
        Row: {
          cancel_at_period_end: boolean | null
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan: string
          status: string
          stripe_customer_id: string | null
          stripe_price_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean | null
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_price_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pdf_exports: {
        Row: {
          created_at: string
          downloads: number | null
          entity: string
          entity_id: string | null
          id: number
          lang: string | null
          tenant_id: string
          url: string
        }
        Insert: {
          created_at?: string
          downloads?: number | null
          entity: string
          entity_id?: string | null
          id?: number
          lang?: string | null
          tenant_id: string
          url: string
        }
        Update: {
          created_at?: string
          downloads?: number | null
          entity?: string
          entity_id?: string | null
          id?: number
          lang?: string | null
          tenant_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "pdf_exports_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      personas: {
        Row: {
          accountability_style: string | null
          anti_goals: string[] | null
          created_at: string
          focus_areas: string[] | null
          id: string
          language: string | null
          non_negotiables: string[] | null
          principles: string[] | null
          updated_at: string
          user_id: string
          values: string[] | null
          voice_style: string | null
        }
        Insert: {
          accountability_style?: string | null
          anti_goals?: string[] | null
          created_at?: string
          focus_areas?: string[] | null
          id?: string
          language?: string | null
          non_negotiables?: string[] | null
          principles?: string[] | null
          updated_at?: string
          user_id: string
          values?: string[] | null
          voice_style?: string | null
        }
        Update: {
          accountability_style?: string | null
          anti_goals?: string[] | null
          created_at?: string
          focus_areas?: string[] | null
          id?: string
          language?: string | null
          non_negotiables?: string[] | null
          principles?: string[] | null
          updated_at?: string
          user_id?: string
          values?: string[] | null
          voice_style?: string | null
        }
        Relationships: []
      }
      pl_text_projects: {
        Row: {
          created_at: string
          id: string
          language: string
          source_text: string
          status: string
          title: string
          tone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          language?: string
          source_text: string
          status?: string
          title: string
          tone?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          language?: string
          source_text?: string
          status?: string
          title?: string
          tone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pl_text_versions: {
        Row: {
          closing_feedback: string
          created_at: string
          id: string
          issues: Json
          metrics: Json
          notes: string
          project_id: string
          revised_text: string
          summary: string
          version_no: number
        }
        Insert: {
          closing_feedback: string
          created_at?: string
          id?: string
          issues?: Json
          metrics?: Json
          notes: string
          project_id: string
          revised_text: string
          summary: string
          version_no: number
        }
        Update: {
          closing_feedback?: string
          created_at?: string
          id?: string
          issues?: Json
          metrics?: Json
          notes?: string
          project_id?: string
          revised_text?: string
          summary?: string
          version_no?: number
        }
        Relationships: [
          {
            foreignKeyName: "pl_text_versions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "pl_text_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      plan_limits: {
        Row: {
          created_at: string
          features: Json | null
          max_ai_calls_per_day: number
          max_maps: number
          max_nodes: number
          max_tokens_per_day: number
          plan: string
        }
        Insert: {
          created_at?: string
          features?: Json | null
          max_ai_calls_per_day: number
          max_maps: number
          max_nodes: number
          max_tokens_per_day: number
          plan: string
        }
        Update: {
          created_at?: string
          features?: Json | null
          max_ai_calls_per_day?: number
          max_maps?: number
          max_nodes?: number
          max_tokens_per_day?: number
          plan?: string
        }
        Relationships: []
      }
      planner: {
        Row: {
          created_at: string
          day: number | null
          id: number
          note: string | null
          reel_id: string | null
          tenant_id: string
          type: string
          week_start: string
        }
        Insert: {
          created_at?: string
          day?: number | null
          id?: number
          note?: string | null
          reel_id?: string | null
          tenant_id: string
          type: string
          week_start: string
        }
        Update: {
          created_at?: string
          day?: number | null
          id?: number
          note?: string | null
          reel_id?: string | null
          tenant_id?: string
          type?: string
          week_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "planner_reel_id_fkey"
            columns: ["reel_id"]
            isOneToOne: false
            referencedRelation: "reels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "planner_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      plans: {
        Row: {
          id: string
          limits: Json
        }
        Insert: {
          id: string
          limits: Json
        }
        Update: {
          id?: string
          limits?: Json
        }
        Relationships: []
      }
      playlist_songs: {
        Row: {
          added_at: string
          id: string
          playlist_id: string
          position: number
          song_id: string
        }
        Insert: {
          added_at?: string
          id?: string
          playlist_id: string
          position?: number
          song_id: string
        }
        Update: {
          added_at?: string
          id?: string
          playlist_id?: string
          position?: number
          song_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "playlist_songs_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playlist_songs_song_id_fkey"
            columns: ["song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      playlists: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      portfolio_pages: {
        Row: {
          created_at: string | null
          is_public: boolean | null
          last_published_at: string | null
          og: Json | null
          sections: Json | null
          seo: Json | null
          theme: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          is_public?: boolean | null
          last_published_at?: string | null
          og?: Json | null
          sections?: Json | null
          seo?: Json | null
          theme?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          is_public?: boolean | null
          last_published_at?: string | null
          og?: Json | null
          sections?: Json | null
          seo?: Json | null
          theme?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      post_analytics: {
        Row: {
          comments: number | null
          created_at: string
          engagement_rate: number | null
          id: string
          likes: number | null
          platform: string
          post_id: string | null
          reach: number | null
          recorded_at: string
          shares: number | null
          user_id: string
          views: number | null
        }
        Insert: {
          comments?: number | null
          created_at?: string
          engagement_rate?: number | null
          id?: string
          likes?: number | null
          platform: string
          post_id?: string | null
          reach?: number | null
          recorded_at?: string
          shares?: number | null
          user_id: string
          views?: number | null
        }
        Update: {
          comments?: number | null
          created_at?: string
          engagement_rate?: number | null
          id?: string
          likes?: number | null
          platform?: string
          post_id?: string | null
          reach?: number | null
          recorded_at?: string
          shares?: number | null
          user_id?: string
          views?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "post_analytics_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "scheduled_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          ai_prompt: string | null
          body: string | null
          category: string | null
          channel_ids: string[] | null
          created_at: string | null
          created_by: string | null
          id: string
          language: string | null
          media: Json | null
          scheduled_at: string | null
          status: string
          title: string | null
          updated_at: string | null
          variant_of: string | null
          workspace_id: string
        }
        Insert: {
          ai_prompt?: string | null
          body?: string | null
          category?: string | null
          channel_ids?: string[] | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          language?: string | null
          media?: Json | null
          scheduled_at?: string | null
          status?: string
          title?: string | null
          updated_at?: string | null
          variant_of?: string | null
          workspace_id: string
        }
        Update: {
          ai_prompt?: string | null
          body?: string | null
          category?: string | null
          channel_ids?: string[] | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          language?: string | null
          media?: Json | null
          scheduled_at?: string | null
          status?: string
          title?: string | null
          updated_at?: string | null
          variant_of?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_variant_of_fkey"
            columns: ["variant_of"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts_history: {
        Row: {
          changed_by: string | null
          created_at: string
          id: string
          post_id: string
          snapshot: Json
          workspace_id: string
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          id?: string
          post_id: string
          snapshot: Json
          workspace_id: string
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          id?: string
          post_id?: string
          snapshot?: Json
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_history_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_history_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      process_analyses: {
        Row: {
          ai_payload: Json | null
          ai_summary: string | null
          boundaries: string
          created_at: string
          current_state: string
          description: string
          executive_summary: string | null
          id: string
          outcomes: string
          pain_points: string
          report_generated: boolean
          stakeholders: string
          status: string | null
          template_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_payload?: Json | null
          ai_summary?: string | null
          boundaries: string
          created_at?: string
          current_state: string
          description: string
          executive_summary?: string | null
          id?: string
          outcomes: string
          pain_points: string
          report_generated?: boolean
          stakeholders: string
          status?: string | null
          template_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_payload?: Json | null
          ai_summary?: string | null
          boundaries?: string
          created_at?: string
          current_state?: string
          description?: string
          executive_summary?: string | null
          id?: string
          outcomes?: string
          pain_points?: string
          report_generated?: boolean
          stakeholders?: string
          status?: string | null
          template_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          active: boolean | null
          created_at: string
          currency: string | null
          description: string | null
          id: string
          images: string[] | null
          price_cents: number | null
          tags: string[] | null
          tenant_id: string
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          price_cents?: number | null
          tags?: string[] | null
          tenant_id: string
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          price_cents?: number | null
          tags?: string[] | null
          tenant_id?: string
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bank_name: string | null
          bio: string | null
          certifications_urls: string[] | null
          city: string | null
          company_name: string | null
          covered_cities: string[] | null
          created_at: string
          credits: number
          daily_prompts_used: number | null
          delivery_pref: string | null
          email: string
          focus: string[] | null
          free_entries_used: number | null
          full_name: string | null
          has_paid: boolean
          hourly_rate_cents: number | null
          iban: string | null
          id: string
          is_premium: boolean | null
          lang: string | null
          last_prompt_reset: string | null
          last_reset_date: string | null
          logo_url: string | null
          map_count: number | null
          notifications_enabled: boolean | null
          oib: string | null
          onboarding_completed: boolean | null
          phone: string | null
          plan: string
          preferred_language: string
          preferred_reminder_time: string | null
          preferred_style: string | null
          reels_tenant_id: string | null
          referral_code: string | null
          referred_by: string | null
          role: Database["public"]["Enums"]["user_role"]
          service_categories: string[] | null
          service_radius_km: number | null
          social: Json | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_plan:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          tenant_id: string | null
          test_mode: boolean | null
          timezone: string | null
          tone: string | null
          trial_ends_at: string | null
          updated_at: string
          user_id: string
          username: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bank_name?: string | null
          bio?: string | null
          certifications_urls?: string[] | null
          city?: string | null
          company_name?: string | null
          covered_cities?: string[] | null
          created_at?: string
          credits?: number
          daily_prompts_used?: number | null
          delivery_pref?: string | null
          email: string
          focus?: string[] | null
          free_entries_used?: number | null
          full_name?: string | null
          has_paid?: boolean
          hourly_rate_cents?: number | null
          iban?: string | null
          id?: string
          is_premium?: boolean | null
          lang?: string | null
          last_prompt_reset?: string | null
          last_reset_date?: string | null
          logo_url?: string | null
          map_count?: number | null
          notifications_enabled?: boolean | null
          oib?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          plan?: string
          preferred_language?: string
          preferred_reminder_time?: string | null
          preferred_style?: string | null
          reels_tenant_id?: string | null
          referral_code?: string | null
          referred_by?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          service_categories?: string[] | null
          service_radius_km?: number | null
          social?: Json | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          tenant_id?: string | null
          test_mode?: boolean | null
          timezone?: string | null
          tone?: string | null
          trial_ends_at?: string | null
          updated_at?: string
          user_id: string
          username?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bank_name?: string | null
          bio?: string | null
          certifications_urls?: string[] | null
          city?: string | null
          company_name?: string | null
          covered_cities?: string[] | null
          created_at?: string
          credits?: number
          daily_prompts_used?: number | null
          delivery_pref?: string | null
          email?: string
          focus?: string[] | null
          free_entries_used?: number | null
          full_name?: string | null
          has_paid?: boolean
          hourly_rate_cents?: number | null
          iban?: string | null
          id?: string
          is_premium?: boolean | null
          lang?: string | null
          last_prompt_reset?: string | null
          last_reset_date?: string | null
          logo_url?: string | null
          map_count?: number | null
          notifications_enabled?: boolean | null
          oib?: string | null
          onboarding_completed?: boolean | null
          phone?: string | null
          plan?: string
          preferred_language?: string
          preferred_reminder_time?: string | null
          preferred_style?: string | null
          reels_tenant_id?: string | null
          referral_code?: string | null
          referred_by?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          service_categories?: string[] | null
          service_radius_km?: number | null
          social?: Json | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_plan?:
            | Database["public"]["Enums"]["subscription_plan"]
            | null
          tenant_id?: string | null
          test_mode?: boolean | null
          timezone?: string | null
          tone?: string | null
          trial_ends_at?: string | null
          updated_at?: string
          user_id?: string
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_reels_tenant_id_fkey"
            columns: ["reels_tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          budget: number | null
          client_id: string | null
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          name: string
          priority: string
          start_date: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          budget?: number | null
          client_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          priority?: string
          start_date?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          budget?: number | null
          client_id?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          priority?: string
          start_date?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_favorites: {
        Row: {
          created_at: string
          generated_prompt_id: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          generated_prompt_id: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          generated_prompt_id?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      prompt_templates: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_pinned: boolean | null
          is_public: boolean | null
          language: string | null
          metadata: Json | null
          prompt_structure: string
          target_model: string | null
          title: string
          tone: string | null
          updated_at: string
          usage_count: number | null
          user_id: string
          variables: Json | null
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_pinned?: boolean | null
          is_public?: boolean | null
          language?: string | null
          metadata?: Json | null
          prompt_structure: string
          target_model?: string | null
          title: string
          tone?: string | null
          updated_at?: string
          usage_count?: number | null
          user_id: string
          variables?: Json | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_pinned?: boolean | null
          is_public?: boolean | null
          language?: string | null
          metadata?: Json | null
          prompt_structure?: string
          target_model?: string | null
          title?: string
          tone?: string | null
          updated_at?: string
          usage_count?: number | null
          user_id?: string
          variables?: Json | null
        }
        Relationships: []
      }
      prompts: {
        Row: {
          category: string
          created_at: string | null
          generated_prompt: string
          goal: string
          id: string
          is_favorite: boolean | null
          language: string
          length: string
          tone: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          created_at?: string | null
          generated_prompt: string
          goal: string
          id?: string
          is_favorite?: boolean | null
          language: string
          length: string
          tone: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          created_at?: string | null
          generated_prompt?: string
          goal?: string
          id?: string
          is_favorite?: boolean | null
          language?: string
          length?: string
          tone?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      qrcodes: {
        Row: {
          created_at: string
          downloads: number | null
          format: string | null
          id: number
          target: string
          target_id: string | null
          tenant_id: string
          url: string
        }
        Insert: {
          created_at?: string
          downloads?: number | null
          format?: string | null
          id?: number
          target: string
          target_id?: string | null
          tenant_id: string
          url: string
        }
        Update: {
          created_at?: string
          downloads?: number | null
          format?: string | null
          id?: number
          target?: string
          target_id?: string | null
          tenant_id?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "qrcodes_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      quiz_results: {
        Row: {
          answers: Json
          created_at: string | null
          duration_seconds: number
          id: string
          player_name: string | null
          quiz_id: string
          score: number
          total_questions: number
          user_id: string | null
        }
        Insert: {
          answers: Json
          created_at?: string | null
          duration_seconds: number
          id?: string
          player_name?: string | null
          quiz_id: string
          score: number
          total_questions: number
          user_id?: string | null
        }
        Update: {
          answers?: Json
          created_at?: string | null
          duration_seconds?: number
          id?: string
          player_name?: string | null
          quiz_id?: string
          score?: number
          total_questions?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "quiz_results_quiz_id_fkey"
            columns: ["quiz_id"]
            isOneToOne: false
            referencedRelation: "quizzes"
            referencedColumns: ["id"]
          },
        ]
      }
      quizzes: {
        Row: {
          age_group: string
          created_at: string
          difficulty: string
          id: string
          is_public: boolean | null
          language: string
          owner_id: string
          payload_size: number | null
          questions: Json | null
          title: string
          topic: string | null
        }
        Insert: {
          age_group?: string
          created_at?: string
          difficulty?: string
          id?: string
          is_public?: boolean | null
          language?: string
          owner_id: string
          payload_size?: number | null
          questions?: Json | null
          title: string
          topic?: string | null
        }
        Update: {
          age_group?: string
          created_at?: string
          difficulty?: string
          id?: string
          is_public?: boolean | null
          language?: string
          owner_id?: string
          payload_size?: number | null
          questions?: Json | null
          title?: string
          topic?: string | null
        }
        Relationships: []
      }
      quotas: {
        Row: {
          active_bids_limit: number | null
          created_at: string | null
          id: number
          platform_fee_pct: number | null
          team_members_limit: number | null
          tenant_id: string
        }
        Insert: {
          active_bids_limit?: number | null
          created_at?: string | null
          id?: number
          platform_fee_pct?: number | null
          team_members_limit?: number | null
          tenant_id: string
        }
        Update: {
          active_bids_limit?: number | null
          created_at?: string | null
          id?: number
          platform_fee_pct?: number | null
          team_members_limit?: number | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quotas_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      rag_chunks: {
        Row: {
          chunk_index: number | null
          content: string
          created_at: string
          id: string
          meta: Json | null
          source_id: string
        }
        Insert: {
          chunk_index?: number | null
          content: string
          created_at?: string
          id?: string
          meta?: Json | null
          source_id: string
        }
        Update: {
          chunk_index?: number | null
          content?: string
          created_at?: string
          id?: string
          meta?: Json | null
          source_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rag_chunks_source_id_fkey"
            columns: ["source_id"]
            isOneToOne: false
            referencedRelation: "rag_sources"
            referencedColumns: ["id"]
          },
        ]
      }
      rag_embeddings: {
        Row: {
          chunk_id: string
          created_at: string
          embedding: string
          id: string
        }
        Insert: {
          chunk_id: string
          created_at?: string
          embedding: string
          id?: string
        }
        Update: {
          chunk_id?: string
          created_at?: string
          embedding?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rag_embeddings_chunk_id_fkey"
            columns: ["chunk_id"]
            isOneToOne: false
            referencedRelation: "rag_chunks"
            referencedColumns: ["id"]
          },
        ]
      }
      rag_sources: {
        Row: {
          created_at: string
          id: string
          meta: Json | null
          source_type: string | null
          tags: string[] | null
          title: string
          url: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          meta?: Json | null
          source_type?: string | null
          tags?: string[] | null
          title: string
          url?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          meta?: Json | null
          source_type?: string | null
          tags?: string[] | null
          title?: string
          url?: string | null
          user_id?: string
        }
        Relationships: []
      }
      rate_limits: {
        Row: {
          endpoint: string
          request_count: number
          user_id: string
          window_start: string
        }
        Insert: {
          endpoint: string
          request_count?: number
          user_id: string
          window_start?: string
        }
        Update: {
          endpoint?: string
          request_count?: number
          user_id?: string
          window_start?: string
        }
        Relationships: []
      }
      ratings: {
        Row: {
          comment: string | null
          created_at: string | null
          id: number
          job_id: string
          photos: string[] | null
          ratee_tenant: string
          rater_tenant: string
          stars: number
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          id?: number
          job_id: string
          photos?: string[] | null
          ratee_tenant: string
          rater_tenant: string
          stars: number
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          id?: number
          job_id?: string
          photos?: string[] | null
          ratee_tenant?: string
          rater_tenant?: string
          stars?: number
        }
        Relationships: [
          {
            foreignKeyName: "ratings_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_ratee_tenant_fkey"
            columns: ["ratee_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_rater_tenant_fkey"
            columns: ["rater_tenant"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      readings: {
        Row: {
          ai_full: string | null
          ai_recommendations: string[] | null
          ai_summary: string | null
          created_at: string
          focus: string
          hand: string
          id: string
          image_path: string | null
          lines: Json | null
          question: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_full?: string | null
          ai_recommendations?: string[] | null
          ai_summary?: string | null
          created_at?: string
          focus: string
          hand: string
          id?: string
          image_path?: string | null
          lines?: Json | null
          question?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_full?: string | null
          ai_recommendations?: string[] | null
          ai_summary?: string | null
          created_at?: string
          focus?: string
          hand?: string
          id?: string
          image_path?: string | null
          lines?: Json | null
          question?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      recurring_invoices: {
        Row: {
          client_address: string | null
          client_email: string | null
          client_name: string
          client_oib: string | null
          created_at: string
          currency: string | null
          frequency: string
          id: string
          invoice_count: number | null
          is_active: boolean | null
          items: Json
          last_invoice_date: string | null
          next_invoice_date: string
          notes: string | null
          subtotal: number | null
          tax_amount: number | null
          tax_rate: number | null
          template_type: string | null
          total: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          client_address?: string | null
          client_email?: string | null
          client_name: string
          client_oib?: string | null
          created_at?: string
          currency?: string | null
          frequency?: string
          id?: string
          invoice_count?: number | null
          is_active?: boolean | null
          items?: Json
          last_invoice_date?: string | null
          next_invoice_date: string
          notes?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          template_type?: string | null
          total?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          client_address?: string | null
          client_email?: string | null
          client_name?: string
          client_oib?: string | null
          created_at?: string
          currency?: string | null
          frequency?: string
          id?: string
          invoice_count?: number | null
          is_active?: boolean | null
          items?: Json
          last_invoice_date?: string | null
          next_invoice_date?: string
          notes?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          tax_rate?: number | null
          template_type?: string | null
          total?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      reels: {
        Row: {
          assets: Json | null
          caption: string | null
          cover_url: string | null
          created_at: string
          cta: string | null
          hashtags: string[] | null
          hook: string | null
          id: string
          lang: string | null
          product_id: string | null
          shots: Json | null
          status: Database["public"]["Enums"]["reel_status"] | null
          subtitles: Json | null
          template: string | null
          tenant_id: string
          updated_at: string
        }
        Insert: {
          assets?: Json | null
          caption?: string | null
          cover_url?: string | null
          created_at?: string
          cta?: string | null
          hashtags?: string[] | null
          hook?: string | null
          id?: string
          lang?: string | null
          product_id?: string | null
          shots?: Json | null
          status?: Database["public"]["Enums"]["reel_status"] | null
          subtitles?: Json | null
          template?: string | null
          tenant_id: string
          updated_at?: string
        }
        Update: {
          assets?: Json | null
          caption?: string | null
          cover_url?: string | null
          created_at?: string
          cta?: string | null
          hashtags?: string[] | null
          hook?: string | null
          id?: string
          lang?: string | null
          product_id?: string | null
          shots?: Json | null
          status?: Database["public"]["Enums"]["reel_status"] | null
          subtitles?: Json | null
          template?: string | null
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reels_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "reels_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reels_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_analytics_daily: {
        Row: {
          created_at: string
          date: string
          exports_count: number | null
          id: number
          reels_created: number | null
          tenant_id: string
          top_templates: Json | null
        }
        Insert: {
          created_at?: string
          date?: string
          exports_count?: number | null
          id?: number
          reels_created?: number | null
          tenant_id: string
          top_templates?: Json | null
        }
        Update: {
          created_at?: string
          date?: string
          exports_count?: number | null
          id?: number
          reels_created?: number | null
          tenant_id?: string
          top_templates?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "reels_analytics_daily_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_brand_kits: {
        Row: {
          color: string | null
          created_at: string
          cta_style: Json | null
          font: string | null
          id: string
          logo_url: string | null
          name: string
          tenant_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          cta_style?: Json | null
          font?: string | null
          id?: string
          logo_url?: string | null
          name: string
          tenant_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          cta_style?: Json | null
          font?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reels_brand_kits_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_calendar_items: {
        Row: {
          created_at: string
          day: number | null
          id: number
          note: string | null
          reel_id: string | null
          tenant_id: string
          type: Database["public"]["Enums"]["content_type"] | null
          week_start: string
        }
        Insert: {
          created_at?: string
          day?: number | null
          id?: number
          note?: string | null
          reel_id?: string | null
          tenant_id: string
          type?: Database["public"]["Enums"]["content_type"] | null
          week_start: string
        }
        Update: {
          created_at?: string
          day?: number | null
          id?: number
          note?: string | null
          reel_id?: string | null
          tenant_id?: string
          type?: Database["public"]["Enums"]["content_type"] | null
          week_start?: string
        }
        Relationships: [
          {
            foreignKeyName: "reels_calendar_items_reel_id_fkey"
            columns: ["reel_id"]
            isOneToOne: false
            referencedRelation: "reels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reels_calendar_items_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_exports: {
        Row: {
          cover_url: string | null
          created_at: string
          id: number
          mp4_url: string | null
          reel_id: string
          srt_url: string | null
          tenant_id: string
          txt_url: string | null
        }
        Insert: {
          cover_url?: string | null
          created_at?: string
          id?: number
          mp4_url?: string | null
          reel_id: string
          srt_url?: string | null
          tenant_id: string
          txt_url?: string | null
        }
        Update: {
          cover_url?: string | null
          created_at?: string
          id?: number
          mp4_url?: string | null
          reel_id?: string
          srt_url?: string | null
          tenant_id?: string
          txt_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reels_exports_reel_id_fkey"
            columns: ["reel_id"]
            isOneToOne: false
            referencedRelation: "reels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reels_exports_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_hashtag_sets: {
        Row: {
          created_at: string
          id: number
          name: string
          tags: string[] | null
          tenant_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          tags?: string[] | null
          tenant_id: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          tags?: string[] | null
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reels_hashtag_sets_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_plans: {
        Row: {
          created_at: string
          id: number
          plan: Database["public"]["Enums"]["plan_type"] | null
          status: string | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tenant_id: string
          trial_ends_at: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          plan?: Database["public"]["Enums"]["plan_type"] | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id: string
          trial_ends_at?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          plan?: Database["public"]["Enums"]["plan_type"] | null
          status?: string | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id?: string
          trial_ends_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reels_plans_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_products: {
        Row: {
          active: boolean | null
          created_at: string
          currency: string | null
          description: string | null
          id: string
          images: string[] | null
          price_cents: number | null
          sku: string | null
          tags: string[] | null
          tenant_id: string
          title: string
          updated_at: string
          url: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          price_cents?: number | null
          sku?: string | null
          tags?: string[] | null
          tenant_id: string
          title: string
          updated_at?: string
          url?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          currency?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          price_cents?: number | null
          sku?: string | null
          tags?: string[] | null
          tenant_id?: string
          title?: string
          updated_at?: string
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reels_products_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_quotas: {
        Row: {
          created_at: string
          id: number
          reels_monthly_limit: number | null
          tenant_id: string
          users_limit: number | null
          watermark: boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          reels_monthly_limit?: number | null
          tenant_id: string
          users_limit?: number | null
          watermark?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          reels_monthly_limit?: number | null
          tenant_id?: string
          users_limit?: number | null
          watermark?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "reels_quotas_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "reels_tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      reels_tenants: {
        Row: {
          brand_color: string | null
          created_at: string
          id: string
          languages: string[] | null
          logo_url: string | null
          name: string
          owner_id: string
          slug: string
          updated_at: string
        }
        Insert: {
          brand_color?: string | null
          created_at?: string
          id?: string
          languages?: string[] | null
          logo_url?: string | null
          name: string
          owner_id: string
          slug: string
          updated_at?: string
        }
        Update: {
          brand_color?: string | null
          created_at?: string
          id?: string
          languages?: string[] | null
          logo_url?: string | null
          name?: string
          owner_id?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      referrals: {
        Row: {
          bonus_awarded: boolean | null
          created_at: string | null
          id: string
          ref_code: string
          referred_user: string | null
        }
        Insert: {
          bonus_awarded?: boolean | null
          created_at?: string | null
          id?: string
          ref_code: string
          referred_user?: string | null
        }
        Update: {
          bonus_awarded?: boolean | null
          created_at?: string | null
          id?: string
          ref_code?: string
          referred_user?: string | null
        }
        Relationships: []
      }
      reflections: {
        Row: {
          created_at: string
          id: string
          lesson: string | null
          mood: number | null
          next: string | null
          session_id: string
          stuck: string | null
          user_id: string
          wins: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          lesson?: string | null
          mood?: number | null
          next?: string | null
          session_id: string
          stuck?: string | null
          user_id: string
          wins?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          lesson?: string | null
          mood?: number | null
          next?: string | null
          session_id?: string
          stuck?: string | null
          user_id?: string
          wins?: string | null
        }
        Relationships: []
      }
      replies: {
        Row: {
          brand_check: boolean | null
          created_at: string
          draft: string
          final: string | null
          id: string
          posted: boolean
          posted_at: string | null
          thread_id: string
          user_id: string | null
          via_integration: string | null
        }
        Insert: {
          brand_check?: boolean | null
          created_at?: string
          draft: string
          final?: string | null
          id?: string
          posted?: boolean
          posted_at?: string | null
          thread_id: string
          user_id?: string | null
          via_integration?: string | null
        }
        Update: {
          brand_check?: boolean | null
          created_at?: string
          draft?: string
          final?: string | null
          id?: string
          posted?: boolean
          posted_at?: string | null
          thread_id?: string
          user_id?: string | null
          via_integration?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "replies_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "threads"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          analysis_id: string
          body_markdown: string
          created_at: string
          id: string
          is_demo: boolean
          language: string
          pdf_storage_path: string | null
          score: number
          section_toc: Json | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          analysis_id: string
          body_markdown: string
          created_at?: string
          id?: string
          is_demo?: boolean
          language: string
          pdf_storage_path?: string | null
          score: number
          section_toc?: Json | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          analysis_id?: string
          body_markdown?: string
          created_at?: string
          id?: string
          is_demo?: boolean
          language?: string
          pdf_storage_path?: string | null
          score?: number
          section_toc?: Json | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      request_logs: {
        Row: {
          action: string | null
          created_at: string
          duration_ms: number | null
          endpoint: string
          error: Json | null
          id: string
          map_id: string | null
          metadata: Json | null
          method: string
          request_id: string
          status_code: number | null
          tokens_used: number | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          created_at?: string
          duration_ms?: number | null
          endpoint: string
          error?: Json | null
          id?: string
          map_id?: string | null
          metadata?: Json | null
          method: string
          request_id: string
          status_code?: number | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          created_at?: string
          duration_ms?: number | null
          endpoint?: string
          error?: Json | null
          id?: string
          map_id?: string | null
          metadata?: Json | null
          method?: string
          request_id?: string
          status_code?: number | null
          tokens_used?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      research_projects: {
        Row: {
          competitors: string[] | null
          created_at: string | null
          geography: string | null
          id: string
          objective: string
          product_service: string | null
          report_data: Json | null
          status: string | null
          target_customer: string | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          competitors?: string[] | null
          created_at?: string | null
          geography?: string | null
          id?: string
          objective: string
          product_service?: string | null
          report_data?: Json | null
          status?: string | null
          target_customer?: string | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          competitors?: string[] | null
          created_at?: string | null
          geography?: string | null
          id?: string
          objective?: string
          product_service?: string | null
          report_data?: Json | null
          status?: string | null
          target_customer?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      restaurant_subscriptions: {
        Row: {
          created_at: string
          id: number
          status: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tenant_id: string
          trial_ends_at: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id: string
          trial_ends_at?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          status?: Database["public"]["Enums"]["subscription_status"] | null
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tenant_id?: string
          trial_ends_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_subscriptions_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      rewards: {
        Row: {
          badge: string
          earned_at: string
          id: string
          user_id: string
        }
        Insert: {
          badge: string
          earned_at?: string
          id?: string
          user_id: string
        }
        Update: {
          badge?: string
          earned_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      rituals: {
        Row: {
          category: string | null
          completed_at: string | null
          created_at: string | null
          description: string | null
          duration_min: number | null
          id: number
          responses: Json | null
          steps: string[] | null
          tags: string[] | null
          title: string
          type: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          duration_min?: number | null
          id?: number
          responses?: Json | null
          steps?: string[] | null
          tags?: string[] | null
          title: string
          type?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          completed_at?: string | null
          created_at?: string | null
          description?: string | null
          duration_min?: number | null
          id?: number
          responses?: Json | null
          steps?: string[] | null
          tags?: string[] | null
          title?: string
          type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      salon_appointments: {
        Row: {
          client_email: string | null
          client_id: string | null
          client_phone: string | null
          created_at: string
          end_time: string
          id: string
          notes: string | null
          price: number | null
          reminder_sent: boolean | null
          service_id: string | null
          staff_id: string | null
          start_time: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          client_email?: string | null
          client_id?: string | null
          client_phone?: string | null
          created_at?: string
          end_time: string
          id?: string
          notes?: string | null
          price?: number | null
          reminder_sent?: boolean | null
          service_id?: string | null
          staff_id?: string | null
          start_time: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          client_email?: string | null
          client_id?: string | null
          client_phone?: string | null
          created_at?: string
          end_time?: string
          id?: string
          notes?: string | null
          price?: number | null
          reminder_sent?: boolean | null
          service_id?: string | null
          staff_id?: string | null
          start_time?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "salon_appointments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "salon_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "salon_appointments_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "salon_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "salon_appointments_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "salon_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      salon_clients: {
        Row: {
          birthdate: string | null
          created_at: string
          email: string | null
          id: string
          last_visit: string | null
          name: string
          notes: string | null
          phone: string | null
          tags: string[] | null
          total_spent: number | null
          total_visits: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          birthdate?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_visit?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          tags?: string[] | null
          total_spent?: number | null
          total_visits?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          birthdate?: string | null
          created_at?: string
          email?: string | null
          id?: string
          last_visit?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          tags?: string[] | null
          total_spent?: number | null
          total_visits?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      salon_services: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          duration_minutes: number
          id: string
          is_active: boolean
          name: string
          price: number
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean
          name: string
          price?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean
          name?: string
          price?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      salon_settings: {
        Row: {
          address: string | null
          created_at: string
          description: string | null
          id: string
          logo_url: string | null
          phone: string | null
          primary_color: string | null
          salon_name: string | null
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          phone?: string | null
          primary_color?: string | null
          salon_name?: string | null
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          description?: string | null
          id?: string
          logo_url?: string | null
          phone?: string | null
          primary_color?: string | null
          salon_name?: string | null
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      salon_staff: {
        Row: {
          color: string | null
          created_at: string
          email: string | null
          id: string
          is_active: boolean
          name: string
          phone: string | null
          role: string | null
          updated_at: string
          user_id: string
          working_hours: Json | null
        }
        Insert: {
          color?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name: string
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id: string
          working_hours?: Json | null
        }
        Update: {
          color?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_active?: boolean
          name?: string
          phone?: string | null
          role?: string | null
          updated_at?: string
          user_id?: string
          working_hours?: Json | null
        }
        Relationships: []
      }
      salon_working_hours: {
        Row: {
          close_time: string
          created_at: string
          day_of_week: number
          id: string
          is_open: boolean
          open_time: string
          user_id: string
        }
        Insert: {
          close_time?: string
          created_at?: string
          day_of_week: number
          id?: string
          is_open?: boolean
          open_time?: string
          user_id: string
        }
        Update: {
          close_time?: string
          created_at?: string
          day_of_week?: number
          id?: string
          is_open?: boolean
          open_time?: string
          user_id?: string
        }
        Relationships: []
      }
      scaleup_plans: {
        Row: {
          ai_report: string | null
          ai_report_generated_at: string | null
          best_practice_readiness: Json | null
          capital_readiness: Json | null
          created_at: string
          culture_readiness: Json | null
          data_readiness: Json | null
          email: string
          id: string
          optimization_readiness: Json | null
          stage: string | null
          updated_at: string
        }
        Insert: {
          ai_report?: string | null
          ai_report_generated_at?: string | null
          best_practice_readiness?: Json | null
          capital_readiness?: Json | null
          created_at?: string
          culture_readiness?: Json | null
          data_readiness?: Json | null
          email: string
          id?: string
          optimization_readiness?: Json | null
          stage?: string | null
          updated_at?: string
        }
        Update: {
          ai_report?: string | null
          ai_report_generated_at?: string | null
          best_practice_readiness?: Json | null
          capital_readiness?: Json | null
          created_at?: string
          culture_readiness?: Json | null
          data_readiness?: Json | null
          email?: string
          id?: string
          optimization_readiness?: Json | null
          stage?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      scheduled_posts: {
        Row: {
          ai_generated: boolean | null
          content: string
          created_at: string
          hashtags: string[] | null
          id: string
          media_urls: string[] | null
          meta: Json | null
          platforms: string[]
          published_at: string | null
          scheduled_at: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_generated?: boolean | null
          content: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          media_urls?: string[] | null
          meta?: Json | null
          platforms: string[]
          published_at?: string | null
          scheduled_at: string
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_generated?: boolean | null
          content?: string
          created_at?: string
          hashtags?: string[] | null
          id?: string
          media_urls?: string[] | null
          meta?: Json | null
          platforms?: string[]
          published_at?: string | null
          scheduled_at?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      schedules: {
        Row: {
          available: boolean | null
          created_at: string | null
          end_time: string | null
          id: number
          start_time: string | null
          tenant_id: string
          weekday: number | null
        }
        Insert: {
          available?: boolean | null
          created_at?: string | null
          end_time?: string | null
          id?: number
          start_time?: string | null
          tenant_id: string
          weekday?: number | null
        }
        Update: {
          available?: boolean | null
          created_at?: string | null
          end_time?: string | null
          id?: number
          start_time?: string | null
          tenant_id?: string
          weekday?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "schedules_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      scholarship_reports: {
        Row: {
          ai_analysis: Json
          generated_at: string
          id: string
          language: string
          pdf_url: string | null
          profile_id: string | null
          report_type: string
          user_id: string
        }
        Insert: {
          ai_analysis: Json
          generated_at?: string
          id?: string
          language?: string
          pdf_url?: string | null
          profile_id?: string | null
          report_type: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json
          generated_at?: string
          id?: string
          language?: string
          pdf_url?: string | null
          profile_id?: string | null
          report_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scholarship_reports_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "user_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      seasonal_ingredients: {
        Row: {
          created_at: string
          id: number
          months: number[] | null
          name: string
          region: string | null
          suggestions: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          months?: number[] | null
          name: string
          region?: string | null
          suggestions?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          months?: number[] | null
          name?: string
          region?: string | null
          suggestions?: string | null
        }
        Relationships: []
      }
      sessions: {
        Row: {
          context: Json | null
          created_at: string
          domain: string | null
          id: string
          inputs: string
          is_favorite: boolean | null
          is_public: boolean | null
          output_md: string | null
          public_token: string | null
          status: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          context?: Json | null
          created_at?: string
          domain?: string | null
          id?: string
          inputs: string
          is_favorite?: boolean | null
          is_public?: boolean | null
          output_md?: string | null
          public_token?: string | null
          status?: string | null
          title: string
          updated_at?: string
          user_id?: string
        }
        Update: {
          context?: Json | null
          created_at?: string
          domain?: string | null
          id?: string
          inputs?: string
          is_favorite?: boolean | null
          is_public?: boolean | null
          output_md?: string | null
          public_token?: string | null
          status?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      shared_prompts: {
        Row: {
          created_at: string
          generated_prompt_id: string
          id: string
          token: string
        }
        Insert: {
          created_at?: string
          generated_prompt_id: string
          id?: string
          token: string
        }
        Update: {
          created_at?: string
          generated_prompt_id?: string
          id?: string
          token?: string
        }
        Relationships: []
      }
      social_accounts: {
        Row: {
          access_token: string | null
          account_id: string | null
          account_name: string | null
          created_at: string
          followers_count: number | null
          id: string
          is_connected: boolean | null
          meta: Json | null
          platform: string
          refresh_token: string | null
          token_expires_at: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          account_id?: string | null
          account_name?: string | null
          created_at?: string
          followers_count?: number | null
          id?: string
          is_connected?: boolean | null
          meta?: Json | null
          platform: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          account_id?: string | null
          account_name?: string | null
          created_at?: string
          followers_count?: number | null
          id?: string
          is_connected?: boolean | null
          meta?: Json | null
          platform?: string
          refresh_token?: string | null
          token_expires_at?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      songs: {
        Row: {
          artist: string | null
          cover_url: string | null
          created_at: string
          duration: number | null
          file_type: string | null
          file_url: string | null
          id: string
          playlist_id: string | null
          title: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          artist?: string | null
          cover_url?: string | null
          created_at?: string
          duration?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          playlist_id?: string | null
          title: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          artist?: string | null
          cover_url?: string | null
          created_at?: string
          duration?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          playlist_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "songs_playlist_id_fkey"
            columns: ["playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
        ]
      }
      soulsync_analyses: {
        Row: {
          a_birth_date: string
          a_birth_place: string | null
          a_birth_time: string | null
          a_expression: number | null
          a_full_name: string
          a_karmic_debts: number[] | null
          a_life_path: number | null
          a_maturity: number | null
          a_personal_year: number | null
          a_personality: number | null
          a_pronouns: string | null
          a_soul_urge: number | null
          b_birth_date: string
          b_birth_place: string | null
          b_birth_time: string | null
          b_expression: number | null
          b_full_name: string
          b_karmic_debts: number[] | null
          b_life_path: number | null
          b_maturity: number | null
          b_personal_year: number | null
          b_personality: number | null
          b_pronouns: string | null
          b_soul_urge: number | null
          compatibility_score: number | null
          couple_number: number | null
          created_at: string
          current_theme: string | null
          email: string
          free_challenge: string | null
          free_strength: string | null
          free_summary: string | null
          id: string
          relationship_status: string | null
          report_language: string
          score_comm: number | null
          score_growth: number | null
          score_intimacy: number | null
          score_values: number | null
          user_id: string | null
        }
        Insert: {
          a_birth_date: string
          a_birth_place?: string | null
          a_birth_time?: string | null
          a_expression?: number | null
          a_full_name: string
          a_karmic_debts?: number[] | null
          a_life_path?: number | null
          a_maturity?: number | null
          a_personal_year?: number | null
          a_personality?: number | null
          a_pronouns?: string | null
          a_soul_urge?: number | null
          b_birth_date: string
          b_birth_place?: string | null
          b_birth_time?: string | null
          b_expression?: number | null
          b_full_name: string
          b_karmic_debts?: number[] | null
          b_life_path?: number | null
          b_maturity?: number | null
          b_personal_year?: number | null
          b_personality?: number | null
          b_pronouns?: string | null
          b_soul_urge?: number | null
          compatibility_score?: number | null
          couple_number?: number | null
          created_at?: string
          current_theme?: string | null
          email: string
          free_challenge?: string | null
          free_strength?: string | null
          free_summary?: string | null
          id?: string
          relationship_status?: string | null
          report_language: string
          score_comm?: number | null
          score_growth?: number | null
          score_intimacy?: number | null
          score_values?: number | null
          user_id?: string | null
        }
        Update: {
          a_birth_date?: string
          a_birth_place?: string | null
          a_birth_time?: string | null
          a_expression?: number | null
          a_full_name?: string
          a_karmic_debts?: number[] | null
          a_life_path?: number | null
          a_maturity?: number | null
          a_personal_year?: number | null
          a_personality?: number | null
          a_pronouns?: string | null
          a_soul_urge?: number | null
          b_birth_date?: string
          b_birth_place?: string | null
          b_birth_time?: string | null
          b_expression?: number | null
          b_full_name?: string
          b_karmic_debts?: number[] | null
          b_life_path?: number | null
          b_maturity?: number | null
          b_personal_year?: number | null
          b_personality?: number | null
          b_pronouns?: string | null
          b_soul_urge?: number | null
          compatibility_score?: number | null
          couple_number?: number | null
          created_at?: string
          current_theme?: string | null
          email?: string
          free_challenge?: string | null
          free_strength?: string | null
          free_summary?: string | null
          id?: string
          relationship_status?: string | null
          report_language?: string
          score_comm?: number | null
          score_growth?: number | null
          score_intimacy?: number | null
          score_values?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      soulsync_payments: {
        Row: {
          amount_cents: number
          analysis_id: string | null
          created_at: string
          currency: string
          id: string
          status: string
          stripe_payment_intent: string | null
          stripe_session_id: string | null
          user_id: string | null
        }
        Insert: {
          amount_cents?: number
          analysis_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          status: string
          stripe_payment_intent?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Update: {
          amount_cents?: number
          analysis_id?: string | null
          created_at?: string
          currency?: string
          id?: string
          status?: string
          stripe_payment_intent?: string | null
          stripe_session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "soulsync_payments_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "soulsync_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      soulsync_reports: {
        Row: {
          analysis_id: string | null
          body_markdown: string
          created_at: string
          id: string
          is_demo: boolean
          language: string
          pdf_storage_path: string | null
          score: number
          section_toc: Json | null
          title: string
          user_id: string | null
        }
        Insert: {
          analysis_id?: string | null
          body_markdown: string
          created_at?: string
          id?: string
          is_demo?: boolean
          language: string
          pdf_storage_path?: string | null
          score: number
          section_toc?: Json | null
          title: string
          user_id?: string | null
        }
        Update: {
          analysis_id?: string | null
          body_markdown?: string
          created_at?: string
          id?: string
          is_demo?: boolean
          language?: string
          pdf_storage_path?: string | null
          score?: number
          section_toc?: Json | null
          title?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "soulsync_reports_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: true
            referencedRelation: "soulsync_analyses"
            referencedColumns: ["id"]
          },
        ]
      }
      sources: {
        Row: {
          active: boolean
          created_at: string
          id: string
          settings: Json
          type: string
          workspace_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: string
          settings?: Json
          type: string
          workspace_id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: string
          settings?: Json
          type?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sources_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      specials: {
        Row: {
          created_at: string
          currency: string | null
          date: string
          description: string | null
          id: string
          lang: string | null
          location_id: string | null
          photo_url: string | null
          price_cents: number | null
          tenant_id: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string | null
          date?: string
          description?: string | null
          id?: string
          lang?: string | null
          location_id?: string | null
          photo_url?: string | null
          price_cents?: number | null
          tenant_id: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string | null
          date?: string
          description?: string | null
          id?: string
          lang?: string | null
          location_id?: string | null
          photo_url?: string | null
          price_cents?: number | null
          tenant_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "specials_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "specials_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_breaks: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          staff_id: string
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time: string
          id?: string
          staff_id: string
          start_time: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          staff_id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_breaks_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "salon_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_services: {
        Row: {
          created_at: string
          id: string
          service_id: string
          staff_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          service_id: string
          staff_id: string
        }
        Update: {
          created_at?: string
          id?: string
          service_id?: string
          staff_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_services_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "salon_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "staff_services_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "salon_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_working_hours: {
        Row: {
          created_at: string
          day_of_week: number
          end_time: string
          id: string
          is_working: boolean
          staff_id: string
          start_time: string
        }
        Insert: {
          created_at?: string
          day_of_week: number
          end_time?: string
          id?: string
          is_working?: boolean
          staff_id: string
          start_time?: string
        }
        Update: {
          created_at?: string
          day_of_week?: number
          end_time?: string
          id?: string
          is_working?: boolean
          staff_id?: string
          start_time?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_working_hours_staff_id_fkey"
            columns: ["staff_id"]
            isOneToOne: false
            referencedRelation: "salon_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      startup_compass_plans: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          session_id: string
          stage1: Json | null
          stage2: Json | null
          summary: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          session_id: string
          stage1?: Json | null
          stage2?: Json | null
          summary?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          session_id?: string
          stage1?: Json | null
          stage2?: Json | null
          summary?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          plan_id: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          plan_id: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          plan_id?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["id"]
          },
        ]
      }
      system_health_logs: {
        Row: {
          checked_at: string
          id: string
          message: string | null
          meta: Json | null
          service_name: string
          status: string
        }
        Insert: {
          checked_at?: string
          id?: string
          message?: string | null
          meta?: Json | null
          service_name: string
          status: string
        }
        Update: {
          checked_at?: string
          id?: string
          message?: string | null
          meta?: Json | null
          service_name?: string
          status?: string
        }
        Relationships: []
      }
      tarot_readings: {
        Row: {
          analysis: string
          cards: Json
          created_at: string
          focus_question: string | null
          id: string
          spread_name: string
          theme: string
          title: string
          user_id: string
        }
        Insert: {
          analysis: string
          cards: Json
          created_at?: string
          focus_question?: string | null
          id?: string
          spread_name: string
          theme: string
          title: string
          user_id: string
        }
        Update: {
          analysis?: string
          cards?: Json
          created_at?: string
          focus_question?: string | null
          id?: string
          spread_name?: string
          theme?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          assigned_to: string | null
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          progress: number | null
          project_id: string | null
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          progress?: number | null
          project_id?: string | null
          status?: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          progress?: number | null
          project_id?: string | null
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      team_invites: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          role: string
          tenant_id: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: string
          tenant_id: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_invites_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          role: string | null
          team_id: string
          user_id: string
        }
        Insert: {
          role?: string | null
          team_id: string
          user_id: string
        }
        Update: {
          role?: string | null
          team_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          owner_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner_id?: string
        }
        Relationships: []
      }
      telemetry_events: {
        Row: {
          created_at: string | null
          event: string
          id: string
          metadata: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event?: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      templates: {
        Row: {
          category: string
          created_at: string
          description: string | null
          id: string
          is_featured: boolean | null
          preview_url: string | null
          structure: Json
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          id?: string
          is_featured?: boolean | null
          preview_url?: string | null
          structure: Json
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          is_featured?: boolean | null
          preview_url?: string | null
          structure?: Json
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      tenants: {
        Row: {
          address: string | null
          ai_descriptions_used: number | null
          ai_instagram_used: number | null
          ai_limit_reset_at: string | null
          ai_specials_used: number | null
          brand_color: string | null
          city: string | null
          created_at: string
          id: string
          languages: string[] | null
          logo_url: string | null
          name: string
          owner_id: string
          phone: string | null
          region: string | null
          slug: string
          trial_ends_at: string | null
          type: Database["public"]["Enums"]["tenant_type"] | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          ai_descriptions_used?: number | null
          ai_instagram_used?: number | null
          ai_limit_reset_at?: string | null
          ai_specials_used?: number | null
          brand_color?: string | null
          city?: string | null
          created_at?: string
          id?: string
          languages?: string[] | null
          logo_url?: string | null
          name: string
          owner_id: string
          phone?: string | null
          region?: string | null
          slug: string
          trial_ends_at?: string | null
          type?: Database["public"]["Enums"]["tenant_type"] | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          ai_descriptions_used?: number | null
          ai_instagram_used?: number | null
          ai_limit_reset_at?: string | null
          ai_specials_used?: number | null
          brand_color?: string | null
          city?: string | null
          created_at?: string
          id?: string
          languages?: string[] | null
          logo_url?: string | null
          name?: string
          owner_id?: string
          phone?: string | null
          region?: string | null
          slug?: string
          trial_ends_at?: string | null
          type?: Database["public"]["Enums"]["tenant_type"] | null
          updated_at?: string
        }
        Relationships: []
      }
      threads: {
        Row: {
          assigned_to: string | null
          author: string | null
          created_at: string
          external_id: string
          id: string
          intent_label: string | null
          intent_score: number | null
          moderation: Json | null
          posted_at: string | null
          rationale: string | null
          raw: Json | null
          sentiment: string | null
          snippet: string | null
          source: string
          status: string
          summary: string | null
          title: string | null
          url: string
          workspace_id: string
        }
        Insert: {
          assigned_to?: string | null
          author?: string | null
          created_at?: string
          external_id: string
          id?: string
          intent_label?: string | null
          intent_score?: number | null
          moderation?: Json | null
          posted_at?: string | null
          rationale?: string | null
          raw?: Json | null
          sentiment?: string | null
          snippet?: string | null
          source: string
          status?: string
          summary?: string | null
          title?: string | null
          url: string
          workspace_id: string
        }
        Update: {
          assigned_to?: string | null
          author?: string | null
          created_at?: string
          external_id?: string
          id?: string
          intent_label?: string | null
          intent_score?: number | null
          moderation?: Json | null
          posted_at?: string | null
          rationale?: string | null
          raw?: Json | null
          sentiment?: string | null
          snippet?: string | null
          source?: string
          status?: string
          summary?: string | null
          title?: string | null
          url?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          amount: number
          category: string
          contact_id: string | null
          created_at: string
          date: string
          description: string | null
          id: string
          project_id: string | null
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          category: string
          contact_id?: string | null
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          project_id?: string | null
          type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          category?: string
          contact_id?: string | null
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          project_id?: string | null
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_counters: {
        Row: {
          created_at: string
          drafts_used: number
          finds_used: number
          id: string
          period_ym: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          drafts_used?: number
          finds_used?: number
          id?: string
          period_ym: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          drafts_used?: number
          finds_used?: number
          id?: string
          period_ym?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_counters_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      usage_events: {
        Row: {
          created_at: string
          duration_ms: number | null
          endpoint: string
          id: string
          map_id: string | null
          tokens_used: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_ms?: number | null
          endpoint: string
          id?: string
          map_id?: string | null
          tokens_used?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          duration_ms?: number | null
          endpoint?: string
          id?: string
          map_id?: string | null
          tokens_used?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "usage_events_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
        ]
      }
      user_analytics_summary: {
        Row: {
          created_at: string
          date: string
          id: string
          platform_stats: Json | null
          posts_count: number | null
          total_engagement: number | null
          total_followers: number | null
          total_reach: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          date?: string
          id?: string
          platform_stats?: Json | null
          posts_count?: number | null
          total_engagement?: number | null
          total_followers?: number | null
          total_reach?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          platform_stats?: Json | null
          posts_count?: number | null
          total_engagement?: number | null
          total_followers?: number | null
          total_reach?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_preferences: {
        Row: {
          created_at: string
          id: string
          last_played_playlist_id: string | null
          last_played_song_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_played_playlist_id?: string | null
          last_played_song_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_played_playlist_id?: string | null
          last_played_song_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_preferences_last_played_playlist_id_fkey"
            columns: ["last_played_playlist_id"]
            isOneToOne: false
            referencedRelation: "playlists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_preferences_last_played_song_id_fkey"
            columns: ["last_played_song_id"]
            isOneToOne: false
            referencedRelation: "songs"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          age: number | null
          citizenship: string | null
          created_at: string
          education_level: string
          field_of_study: string
          financial_status: string
          gpa: number | null
          hobbies: string[] | null
          id: string
          location: string
          special_circumstances: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age?: number | null
          citizenship?: string | null
          created_at?: string
          education_level: string
          field_of_study: string
          financial_status: string
          gpa?: number | null
          hobbies?: string[] | null
          id?: string
          location: string
          special_circumstances?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age?: number | null
          citizenship?: string | null
          created_at?: string
          education_level?: string
          field_of_study?: string
          financial_status?: string
          gpa?: number | null
          hobbies?: string[] | null
          id?: string
          location?: string
          special_circumstances?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_settings: {
        Row: {
          ai_coaching_style: string | null
          ai_future_timeframe: string | null
          ai_response_length: string | null
          created_at: string
          notifications_daily_reminder: boolean | null
          notifications_email: boolean | null
          notifications_push: boolean | null
          theme: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_coaching_style?: string | null
          ai_future_timeframe?: string | null
          ai_response_length?: string | null
          created_at?: string
          notifications_daily_reminder?: boolean | null
          notifications_email?: boolean | null
          notifications_push?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_coaching_style?: string | null
          ai_future_timeframe?: string | null
          ai_response_length?: string | null
          created_at?: string
          notifications_daily_reminder?: boolean | null
          notifications_email?: boolean | null
          notifications_push?: boolean | null
          theme?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_usage: {
        Row: {
          created_at: string | null
          date: string
          id: string
          prompts_generated: number
          user_id: string
        }
        Insert: {
          created_at?: string | null
          date?: string
          id?: string
          prompts_generated?: number
          user_id: string
        }
        Update: {
          created_at?: string | null
          date?: string
          id?: string
          prompts_generated?: number
          user_id?: string
        }
        Relationships: []
      }
      venues: {
        Row: {
          address: string | null
          cover_url: string | null
          created_at: string
          id: string
          lat: number | null
          lng: number | null
          name: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          address?: string | null
          cover_url?: string | null
          created_at?: string
          id?: string
          lat?: number | null
          lng?: number | null
          name: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          address?: string | null
          cover_url?: string | null
          created_at?: string
          id?: string
          lat?: number | null
          lng?: number | null
          name?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "venues_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      versions: {
        Row: {
          author_id: string | null
          created_at: string | null
          id: string
          map_id: string
          snapshot: Json
        }
        Insert: {
          author_id?: string | null
          created_at?: string | null
          id?: string
          map_id: string
          snapshot: Json
        }
        Update: {
          author_id?: string | null
          created_at?: string | null
          id?: string
          map_id?: string
          snapshot?: Json
        }
        Relationships: [
          {
            foreignKeyName: "versions_map_id_fkey"
            columns: ["map_id"]
            isOneToOne: false
            referencedRelation: "maps"
            referencedColumns: ["id"]
          },
        ]
      }
      visual_identity: {
        Row: {
          brand_assets: Json | null
          color_palette: Json | null
          completed_at: string | null
          created_at: string
          id: string
          image_guidelines: string | null
          logo_concept: string | null
          typography: Json | null
          updated_at: string
          user_id: string
          visual_style: string | null
        }
        Insert: {
          brand_assets?: Json | null
          color_palette?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          image_guidelines?: string | null
          logo_concept?: string | null
          typography?: Json | null
          updated_at?: string
          user_id: string
          visual_style?: string | null
        }
        Update: {
          brand_assets?: Json | null
          color_palette?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          image_guidelines?: string | null
          logo_concept?: string | null
          typography?: Json | null
          updated_at?: string
          user_id?: string
          visual_style?: string | null
        }
        Relationships: []
      }
      vk_monthly_reports: {
        Row: {
          created_at: string
          ics_path: string | null
          id: string
          period: string
          report_data: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          ics_path?: string | null
          id?: string
          period: string
          report_data?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          ics_path?: string | null
          id?: string
          period?: string
          report_data?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vk_profiles: {
        Row: {
          created_at: string
          datum_rodjenja: string
          id: string
          ime: string
          mjesto_rodjenja: string
          pouzdanost: string
          prioriteti: string[]
          timezone: string
          updated_at: string
          user_id: string
          vrijeme_rodjenja: string | null
        }
        Insert: {
          created_at?: string
          datum_rodjenja: string
          id?: string
          ime: string
          mjesto_rodjenja: string
          pouzdanost?: string
          prioriteti?: string[]
          timezone?: string
          updated_at?: string
          user_id: string
          vrijeme_rodjenja?: string | null
        }
        Update: {
          created_at?: string
          datum_rodjenja?: string
          id?: string
          ime?: string
          mjesto_rodjenja?: string
          pouzdanost?: string
          prioriteti?: string[]
          timezone?: string
          updated_at?: string
          user_id?: string
          vrijeme_rodjenja?: string | null
        }
        Relationships: []
      }
      vk_subscriptions: {
        Row: {
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vk_talent_snapshots: {
        Row: {
          created_at: string
          id: string
          pdf_path: string | null
          snapshot_data: Json
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          pdf_path?: string | null
          snapshot_data?: Json
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          pdf_path?: string | null
          snapshot_data?: Json
          user_id?: string
        }
        Relationships: []
      }
      webhooks: {
        Row: {
          event_types: string[]
          id: string
          secret: string
          url: string
          workspace_id: string
        }
        Insert: {
          event_types: string[]
          id?: string
          secret: string
          url: string
          workspace_id: string
        }
        Update: {
          event_types?: string[]
          id?: string
          secret?: string
          url?: string
          workspace_id?: string
        }
        Relationships: []
      }
      workspaces: {
        Row: {
          brand_logo: string | null
          brand_primary_color: string | null
          created_at: string
          custom_domains: string[] | null
          id: string
          is_demo: boolean
          locale: string
          name: string
          owner_id: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_status: string | null
          timezone: string
        }
        Insert: {
          brand_logo?: string | null
          brand_primary_color?: string | null
          created_at?: string
          custom_domains?: string[] | null
          id?: string
          is_demo?: boolean
          locale?: string
          name: string
          owner_id: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          timezone?: string
        }
        Update: {
          brand_logo?: string | null
          brand_primary_color?: string | null
          created_at?: string
          custom_domains?: string[] | null
          id?: string
          is_demo?: boolean
          locale?: string
          name?: string
          owner_id?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_status?: string | null
          timezone?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      ai_consume_credit: {
        Args: { qty?: number; ws: string }
        Returns: boolean
      }
      audit: {
        Args: {
          p_action: string
          p_entity?: string
          p_entity_id?: string
          p_meta?: Json
          p_workspace_id: string
        }
        Returns: string
      }
      can_access_reels_tenant: {
        Args: { tenant_uuid: string }
        Returns: boolean
      }
      can_access_tenant: { Args: { tenant_uuid: string }; Returns: boolean }
      can_create_diary_entry: { Args: { user_uuid: string }; Returns: boolean }
      can_create_entry: { Args: never; Returns: boolean }
      can_create_quiz: { Args: { uid: string }; Returns: boolean }
      can_use_ai_feature: {
        Args: { p_feature: string; p_tenant_id: string }
        Returns: boolean
      }
      check_daily_limit: { Args: { user_uuid: string }; Returns: boolean }
      check_plan_entitlement: {
        Args: { p_action: string; p_count?: number; p_user_id: string }
        Returns: Json
      }
      cleanup_old_logs: { Args: never; Returns: undefined }
      credit_ledger_add: {
        Args: {
          p_meta?: Json
          p_qty: number
          p_type: string
          p_workspace_id: string
        }
        Returns: string
      }
      get_plan_limits: { Args: { p_plan: string }; Returns: Json }
      get_user_reels_tenant_id: { Args: never; Returns: string }
      get_user_role: {
        Args: { user_uuid: string }
        Returns: Database["public"]["Enums"]["user_role"]
      }
      get_user_tenant_id: { Args: never; Returns: string }
      has_active_premium: { Args: { p_user_id: string }; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_ai_usage: {
        Args: { p_feature: string; p_tenant_id: string }
        Returns: undefined
      }
      increment_allergen_filter: {
        Args: { p_allergen_code: string; p_menu_id: string }
        Returns: undefined
      }
      increment_menu_view: { Args: { p_menu_id: string }; Returns: undefined }
      increment_pdf_download: {
        Args: { p_menu_id: string }
        Returns: undefined
      }
      increment_prompt_usage: {
        Args: { user_uuid: string }
        Returns: undefined
      }
      increment_qr_scan: { Args: { p_menu_id: string }; Returns: undefined }
      is_admin: { Args: { uid: string }; Returns: boolean }
      is_member: { Args: { ws: string }; Returns: boolean }
      is_team_member: {
        Args: { _team_id: string; _user_id: string }
        Returns: boolean
      }
      is_team_owner: {
        Args: { _team_id: string; _user_id: string }
        Returns: boolean
      }
      is_workspace_member: { Args: { p_workspace: string }; Returns: boolean }
      jobs_claim_one: {
        Args: { job_type: string; ws: string }
        Returns: {
          address_masked: string | null
          attempts: number
          budget_max: number | null
          budget_min: number | null
          category: string | null
          city: string | null
          client_tenant: string | null
          created_at: string | null
          deadline: string | null
          description: string | null
          due_at: string
          id: string
          last_error: string | null
          lat: number | null
          lng: number | null
          payload: Json
          preferred_date: string | null
          radius_km: number | null
          status: string
          title: string | null
          type: string
          updated_at: string | null
          workspace_id: string
        }
        SetofOptions: {
          from: "*"
          to: "jobs"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      match_chunks: {
        Args: {
          match_count: number
          p_date_from?: string
          p_tags?: string[]
          p_types?: string[]
          p_user_id: string
          query_embedding: string
        }
        Returns: {
          chunk_content: string
          chunk_id: string
          distance: number
          source_id: string
          source_title: string
          source_url: string
        }[]
      }
      plan_limits: { Args: { ws: string }; Returns: Json }
      update_checklist_item: {
        Args: { p_key: string; p_user_id: string; p_value: Json }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "admin" | "user"
      appointment_status: "pending" | "confirmed" | "done" | "canceled"
      bid_status:
        | "active"
        | "withdrawn"
        | "rejected"
        | "shortlisted"
        | "accepted"
      content_type: "reel" | "post" | "story"
      contract_status:
        | "pending"
        | "active"
        | "completed"
        | "disputed"
        | "canceled"
      entry_type:
        | "old_story"
        | "new_paradigm"
        | "goal"
        | "insight"
        | "exercise_result"
      job_status:
        | "open"
        | "in_review"
        | "assigned"
        | "in_progress"
        | "completed"
        | "canceled"
      media_type: "image" | "video"
      menu_status: "draft" | "published"
      plan_type: "free" | "pro" | "business"
      reel_status: "draft" | "ready" | "exported"
      step_type:
        | "step1"
        | "step2"
        | "step3"
        | "step4"
        | "step5"
        | "step6"
        | "step7"
      subscription_plan: "free" | "premium"
      subscription_status:
        | "active"
        | "inactive"
        | "trialing"
        | "past_due"
        | "canceled"
      tenant_type: "client" | "provider"
      user_role: "admin" | "user" | "client" | "provider"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      appointment_status: ["pending", "confirmed", "done", "canceled"],
      bid_status: [
        "active",
        "withdrawn",
        "rejected",
        "shortlisted",
        "accepted",
      ],
      content_type: ["reel", "post", "story"],
      contract_status: [
        "pending",
        "active",
        "completed",
        "disputed",
        "canceled",
      ],
      entry_type: [
        "old_story",
        "new_paradigm",
        "goal",
        "insight",
        "exercise_result",
      ],
      job_status: [
        "open",
        "in_review",
        "assigned",
        "in_progress",
        "completed",
        "canceled",
      ],
      media_type: ["image", "video"],
      menu_status: ["draft", "published"],
      plan_type: ["free", "pro", "business"],
      reel_status: ["draft", "ready", "exported"],
      step_type: [
        "step1",
        "step2",
        "step3",
        "step4",
        "step5",
        "step6",
        "step7",
      ],
      subscription_plan: ["free", "premium"],
      subscription_status: [
        "active",
        "inactive",
        "trialing",
        "past_due",
        "canceled",
      ],
      tenant_type: ["client", "provider"],
      user_role: ["admin", "user", "client", "provider"],
    },
  },
} as const
